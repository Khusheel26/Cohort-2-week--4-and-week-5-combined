import React, { useState } from 'react'
import Card from './components/Card'
import './App.css'
const App = () => {
  const [userDetails , setuserDetails] = useState([]);
  const [name , setName] = useState("");
  const [linkedinHandle , setLinkedinHandle] = useState("")
  const [twitterHandle, settwitterrHandle] = useState("")
  const [interest , setinterest] = useState("")
  const[description ,setDescription] = useState("")


  // const userSocialMediaHandle=()=>{
  //   const newUserhandle = {
  //     LinkedIn : linkedinHandle,
  //     Twitter:twitterHandle
  //   }
  //   setUserhandles([...userHandles , newUserhandle])
  // }
  const handleButtonClick=()=>{
  
    const newUser={
      name : name,
      description:description,
      interest:interest,
      SocialMediaHandles:{
        LinkedIn : linkedinHandle,
        Twitter:twitterHandle
      }
    }
    setuserDetails([...userDetails ,newUser])

    setName("");
    setDescription("");
    setinterest("");
    setLinkedinHandle("");
    settwitterrHandle("");
  }
  return (
    
    <div>
      <div className="input-form">
        <input type="text" placeholder='enter your name' value={name}  onChange={(e)=>{
          setName(e.target.value);
        }}/>
        <input type="text" placeholder='enter your short description' value={description} onChange={(e)=>{
          setDescription(e.target.value);
        }}/>

        <input type="text"  placeholder='Enter you Interests'  value={interest} onChange={(e)=>{
          setinterest(e.target.value)
        }}/>
        <label htmlFor="linkedin">LinkedIn:</label>
          <input type="text" id="linkedin" name="linkedin" value={linkedinHandle} onChange={(e)=>{
            setLinkedinHandle(e.target.value);
          }}/>

          <label htmlFor="twitter">Twitter:</label>
          <input type="text" id="twitter" name="twitter" value={twitterHandle} onChange={(e)=>{
            settwitterrHandle(e.target.value)
          }}/>

          <button onClick={
            handleButtonClick
          }> Save Details</button>
      </div>
      <Card details={userDetails}>  </Card>
    </div>
  )
}

export default App
