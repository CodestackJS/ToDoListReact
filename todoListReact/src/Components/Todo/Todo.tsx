import { useState } from "react";
import { MdCheckCircle } from "react-icons/md";
import { MdRadioButtonUnchecked } from "react-icons/md";


interface TodoItem {
  id: number;
  todo: string;
  completeItem: boolean;
}



const Todo = () => {
  //Help managing state, UseState for input, and UseState for list
  const [input, setInput] = useState("");

  //create a function to help track our list
  const [list, setList] = useState<TodoItem[]>([]);

  //create a function to help us add, delete, update

  //create a function to help us add our todo  to our list
  const addTodo = (newItem: string) => {
    
    const newTodo:TodoItem | any = {
      id: Math.random(),
      todo: newItem,
      completeItem: false
    };
    setList([...list, newTodo]);
    setInput("");
  };

  const handleDelete = (id: number) => {
    setList(list.filter((lists) => lists.id !== id));
  }

  const doneTask = (id:number) => {
    setList(list.map(lists => lists.id === id ?{...lists, completeItem: !lists.completeItem } : lists ))
  }
 
 
    return (
      <>




        <div className="myContainer">
          <div className="row">
            <h1>Todo List</h1>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="addButton" onClick={() => addTodo(input)}>
              Add
            </button>
          </div>

          <ul>
            {list.map((item) => (
              <div key={item.id}>
                {item.completeItem? <MdCheckCircle onClick={() => doneTask(item.id)}/> : <MdRadioButtonUnchecked onClick={() => doneTask(item.id)}  /> }    
                {item.todo}
             
                <button onClick={() => handleDelete(item.id)}>delete</button>
                {/* <button onClick={() => doneTask(item.id)}>task is done</button> */}
              </div>
            ))}
          </ul>
          {/* render our list, ul, li map list update our useState */}
        </div>
      </>
    );
};
export default Todo
