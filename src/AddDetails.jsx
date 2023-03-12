import {useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import './App.css'

const AddDetails=({stdData , setData})=>{

    const[id,setId]=useState('')
    const[name,setName]=useState('')
    const[gender,setGender]=useState('')
    const[role,setRole]=useState('')
    const[exp,setExp]=useState('')
  const navigate=useNavigate()


  //adding data
    const addNewData=()=>{
        const newData={
          id,
          name,
          Gender:gender,
          Role:role,
          YearsOfExperience:exp
        }
        console.log(newData)
        setData([...stdData,newData])
        //spread oprator keeping the old value and adding new val to it
        setId('')
        setName('')
        setGender('')
        setRole('')
        setExp('')
        navigate('/details')
        //emptying the input feilds after clicking ADD button
      }



    return(
<div className="inp-field">
<br></br>
<TextField  id="filled-basic" label="Enter Id" variant="filled" 
onChange={(event)=>setId(event.target.value)}
value={id} />

<TextField id="filled-basic" label="Enter Name" variant="filled" 
onChange={(event)=>setName(event.target.value)}
value={name} />

<TextField id="filled-basic" label="Enter Gender" variant="filled" 
onChange={(event)=>setGender(event.target.value)}
value={gender} />

<TextField id="filled-basic" label="Enter Role" variant="filled" 
onChange={(event)=>setRole(event.target.value)}
value={role} />

<TextField id="filled-basic" label="Enter Year of Experience" variant="filled" 
onChange={(event)=>setExp(event.target.value)}
value={exp} />


<Button id='add-btn' variant="contained" color='success' 
onClick={addNewData}>
  Add Data</Button> 

</div>

    )
}


export default AddDetails;