defmodule Pluggy.User do

	defstruct(id: nil, username: "")

	alias Pluggy.User

	def get do
		Postgrex.query!(DB, "SELECT id, mail, username FROM users", [], pool: DBConnection.Poolboy)
	end

	def get(id) do
		Postgrex.query!(DB, "SELECT id, username FROM users WHERE id = $1 LIMIT 1", [id],
        pool: DBConnection.Poolboy
      ).rows |> to_struct
	end

	def to_struct([[id, username]]) do
		%User{id: id, username: username}
	end
end