defmodule Pluggy.User do

	defstruct(id: nil, username: "")

	alias Pluggy.User

	def get do
		data = Postgrex.query!(DB, "SELECT id, username FROM users", [], pool: DBConnection.Poolboy).rows
		Enum.map(data, fn x -> to_struct([x]) end) |> to_json
	end

	def get(id) do
		Postgrex.query!(DB, "SELECT id, username FROM users WHERE id = $1 LIMIT 1", [String.to_integer(id)], pool: DBConnection.Poolboy).rows 
		|> to_struct
		|> to_json
	end

	def to_struct([[id, username]]) do
		%User{id: id, username: username}
	end

	def to_json(data) do
		Poison.encode!(data, pretty: true)
	end
end