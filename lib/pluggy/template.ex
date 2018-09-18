defmodule Pluggy.Template do
  def render(file, data \\ [], layout \\ true) do
  	case layout do
    	true -> 
				EEx.eval_file("templates/#{file}", data)
    	false -> 
    		EEx.eval_file("templates/#{file}", data)
    end
  end
end
