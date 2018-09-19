defmodule Pluggy.UserController do

	import Pluggy.Template, only: [render: 2]
	import Plug.Conn, only: [send_resp: 3, put_resp_content_type: 2]
	alias Pluggy.User

	def index(conn, _id) do
		send_resp(conn, 200, render("/users.html.eex", []))
	end

	def login(conn, params) do
		username = params["username"]
		password = params["pwd"]
		result =
		  Postgrex.query!(DB, "SELECT id, password FROM public.user WHERE username = $1", [username],
		    pool: DBConnection.Poolboy
		  )

		case result.num_rows do
		  0 -> #no user with that username
				redirect(conn, "/login")
		  _ -> #user with that username exists
		    [[id, password_hash]] = result.rows

		    #make sure password is correct
		    if Bcrypt.verify_pass(password, password_hash) do
		      Plug.Conn.put_session(conn, :user_id, id)
					|>redirect("/login")
		    else
					redirect(conn, "/login")
		    end
		end
	end

	def logout(conn) do
		Plug.Conn.configure_session(conn, drop: true)
		|> redirect("/fruits")
	end

	def create(conn, params) do
		if params["pwd"] == params["re_pwd"] do
			hashed_password = Bcrypt.hash_pwd_salt(params["pwd"])
			Postgrex.query!(DB, "INSERT INTO public.user (mail, username, password) VALUES ($1, $2, $3)", [params["mail"], params["username"], hashed_password], [pool: DBConnection.Poolboy])
			#pseudocode
			# in db table users with password_hash CHAR(60)
			# hashed_password = Bcrypt.hash_pwd_salt(params["password"])
				# Postgrex.query!(DB, "INSERT INTO users (username, password_hash) VALUES ($1, $2)", [params["username"], hashed_password], [pool: DBConnection.Poolboy])
			redirect(conn, "/login")
		else
			redirect(conn, "/fruit")
		end
	end

	def get_users(conn) do
		users = User.get
		put_resp_content_type(conn, "application/json")
		|> send_resp(200, render("/api/users.html.eex", users: users))
	end

	def get_user(conn, id) do
		user = User.get(id)
		put_resp_content_type(conn, "application/json")
		|> send_resp(200, render("/api/users.html.eex", user: user))
	end

	defp redirect(conn, url), do: Plug.Conn.put_resp_header(conn, "location", url) |> send_resp(303, "")
end
