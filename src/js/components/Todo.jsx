import React, {useState} from "react";
// import '@fortawesome/fontawesome-free/css/all.min.css'; 
// // had to import FA via index.html instead of here



const ToDo = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputtasks, setTasks] = useState([]);

 {  /* Function to handle deletion of tasks */}
  const handleDelete = (indexToDelete) => {
    setTasks(inputtasks.filter((_, index) => index !== indexToDelete));
  };

	return (
		<div className="toDo text-center mt-4 container">
           <div className= "mb-4 "><h1><strong>Your TO DO List </strong></h1></div>
           
             {/* DEPRECATED onKeyPress={(e) => e.keyCode == 14} */}
             <ul>

                {/* Input field for new tasks */}
              <input type="text" className="form-control mb-4"
                    onChange={(e) => setInputValue(e.target.value)} 
                    value={inputValue} 

                    onKeyDown={(e) => {console.log("PRESSED KEY");
                          if (e.key === 'Enter') {setTasks([...inputtasks, inputValue]);
                            setInputValue("");}}}

                    placeholder="Enter your Task Here" ></input>
               



                {/* Adds/renders the user input tasks to the list */}
                {/*Also deletion of task item when icon is clicked */}
                  {inputtasks.map((task, index) => (
                        <li key={index}> {task} <i className="fa-solid fa-trash-can" onClick={() => handleDelete(index)}></i></li> ))}
                
                {/* FA icons added to list*/}
                <li>ToDo List <i className="fa-solid fa-trash-can"></i></li> 
          
              
            </ul>
           
           {/* renders amount of tasks */}
                    <div className="task-count">
                        <p>You have {inputtasks.length} tasks</p>
                    </div>
		</div>

   
	);
};
 // FontAwesome icon for delete action
    <div className="delete-icon text-danger">
        <i className="fa-solid fa-trash-can"></i>
    </div>

  
export default ToDo;