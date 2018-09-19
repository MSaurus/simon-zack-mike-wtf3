defmodule Pluggy.Template do
  def render(file, data \\ [], layout \\ true) do
  	case layout do
    	true -> 
				EEx.eval_file("priv/static/#{file}", data)
    	false -> 
    		EEx.eval_file("priv/static/#{file}", data)
    end
  end
end
