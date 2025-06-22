
import {useState} from "react"
const Todo=()=>{
    const [inputText,setInputText]=useState("");
    const [todoList,setTodoList]=useState([]);
    const [counter,setCounter]=useState(0);

    const deleteTodo=(itemId)=>{
       const filteredList= todoList.filter((item)=>item.id!=itemId)
        setTodoList(filteredList)
    }
    return (
        <div >
            <h1 className="text-5xl text-center p-4 font-extrabold animate-pulse text-green-800">Make your todo</h1>
           <div className="flex justify-center mt-10">
            
            {/* input text and submit button */}
            <input type="text"
            className="border-2 rounded-lg w-2xs p-2 m-1 hover:focus-within:p-3"
            value={inputText}
            onChange={(e)=>setInputText(e.target.value)}
             onKeyDown={(e)=>{
                          if(e.key=="Enter" )
                         {
                            console.log("Enetr prseeed")
                            const newTodo={
                                id:counter,
                                name:inputText
                         }
                         
                         setCounter(counter+1)
                         setTodoList([...todoList,newTodo])
                         setInputText("")
                        }
                      }
                    }
            placeholder="Enter the todo"
            ></input>

            <button
            className="py-1  px-5 cursor-pointer  w-auto bg-green-700 text-white rounded-lg"
            

            onClick={(e)=>{
                      if(inputText.trim()!="")
                      {
                         const newTodo={
                                id:counter,
                                name:inputText
                         }
                         console.log(counter)
                         setCounter(counter+1)
                         setTodoList([...todoList,newTodo])
                         setInputText("")
                      }
                    }
                   
            }
            >
                ADD
            </button>
           </div>

           <div  className="flex justify-center mt-4">
            {/* display the todo list */}
            <div>
            {todoList.map((item)=>
            <div key={item.id}
            className="flex m-2 justify-between "
            >
               <p className="mt-2">{item.name}</p>
               <button
               className="bg-red-600 py-2 px-1 ml-2 text-black shadow-2xl rounded"
               onClick={()=>
                {   if(confirm("deleting todo"))
                    deleteTodo(item.id

                    )}}
               >Delete</button>
            </div>
            
            )}
            </div>
           </div>
        </div>
    );
}

export default Todo;