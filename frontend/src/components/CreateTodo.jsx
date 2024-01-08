import React, { useState } from 'react'

const CreateTodo = (props) => {
  const [title,setTitle]=useState("");
  const [description ,setDescription] = useState("")
  return (
    <div>
        <input type="text" placeholder='title' onChange={(e)=>{
          const value = e.target.value;
          setTitle(value);
        }}/> <br /><br /><br />
        <input type="text" placeholder='description' onChange={(e)=>{
          const description = e.target.value;
          setDescription(description)
        }}/><br /><br /><br />



        <button onClick={()=>{
          fetch("http://localhost:3000/todo",{
            method:"POST",
            body:JSON.stringify({
              title:title,
              description:description
            }),
            headers:{
              "Content-Type": "application/json"
            }
          }).then(async function (res){
            const json = await res.json();
            alert("Todo Added");
          })
        }}>Add Todo</button>
    </div>
  )
}

export default CreateTodo