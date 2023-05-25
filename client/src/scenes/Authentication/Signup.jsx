import { Box, Button, FormControl, FormHelperText, Input, InputLabel, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const SignUp = () => {
   const navigate=useNavigate()
   const [username, setUsername]=useState('')
   const [password, setPassword]=useState('')

   async function submit(e){
      e.prevent.Default();

      try{
        await axios.post("http://localhost:8000/signup", {
          username,password
        })

        .then(res=>{
          if(res.data == "exist"){
            alert("User already exists")
            
          }
          else if(res.data == "notexist"){
            navigate("/layout", {state: {id: username}})
          }
        })
        .catch(e=>{
          alert("Wrong Details")
          console.log(e)
        })
      }
      catch(e){
        console.log(e);
      }
   }

  return (
    <Box>
      <Typography>Signup</Typography>
      <FormControl action="POST">
         <InputLabel>Username</InputLabel>
         <Input id="username" placeholder='Enter username' onChange={(e)=>{setUser(e.target.value)}}/>
         
         <InputLabel>Password</InputLabel>
         <Input id="password" placeholder='Enter password' onChange={(e)=>{setUser(e.target.value)}}/>

         <Input type='submit' onClick={submit} />

         <br/>
         OR <Link To="/" >Login</Link>
      </FormControl>
    </Box>
  )
}

export default SignUp