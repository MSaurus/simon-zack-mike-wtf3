defmodule Pluggy.User do

	defstruct(user_info: %{id: nil, username: "", mail: ""})

	alias Pluggy.User

	def get do
		Postgrex.query!(DB, "SELECT id, username, mail FROM users", [], pool: DBConnection.Poolboy).rows
		|> to_struct_list
		|> to_json
	end

	def get(id) do
		Postgrex.query!(DB, "SELECT id, username, mail FROM users WHERE id = $1", [String.to_integer(id)], pool: DBConnection.Poolboy).rows 
		|> to_struct 
		|> to_json
	end

	def to_struct([[id, username, mail]]) do
		%User{user_info: %{id: id, username: username, mail: mail}}
	end

	def to_struct_list(rows), do: for [id, username, mail] <- rows, do: %User{user_info: %{id: id, username: username, mail: mail}}


	def to_json(data) do
		Poison.encode!(%{data: data}, pretty: true)
	end
end