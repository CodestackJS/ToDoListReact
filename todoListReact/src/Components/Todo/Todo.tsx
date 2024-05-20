import { useState } from "react"
interface TodoItem{
    id: number
    todo: string
}



const Todo = () => {

//Help managing state, UseState for input, and UseState for list
const [input, setInput] = useState('')


//create a function to help track our list
const [list, setList] = useState<TodoItem[]>([]);

//create a function to help us add, delete, update

//create a function to help us add our todo  to our list
const addTodo =(newItem:string) =>{
    const newTodo = {
        id: Math.random(),
        todo:newItem
    }
    setList([...list,newTodo]);
    setInput("");
}

  return (
    <>
        <div className="myContainer">
            <div className="row">
                <h1>Todo List</h1>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                <button className="addButton" onClick={() => addTodo(input)}>Add</button>
           
            </div>

            <ul>
                {list.map(item => (
                    <li key={item.id}>
                        {item.todo} 
                        <button>X</button>
                    </li>


                ))}
            </ul>


            {/* render our list, ul, li map list update our useState */}

        </div>
    
    
    
    </>
  )
}

export default Todo