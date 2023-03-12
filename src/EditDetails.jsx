import { useParams } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useEffect,useState } from 'react';
import TextField from '@mui/material/TextField';
import './App.css'


function EditDetails({stdData, setData}){
    const navigate=useNavigate()

    const {id}=useParams()
    const selectedVal = stdData[id] 

    const[idX,setId]=useState('')
    const[name,setName]=useState('')
    const[gender,setGender]=useState('')
    const[role,setRole]=useState('')
    const[exp,setExp]=useState('')
    const [editId, setEditId] = useState("");


    useEffect(() => {
        setEditId(selectedVal.id);
        setId(selectedVal.id)
        setName(selectedVal.name)
        setGender(selectedVal.Gender)
        setRole(selectedVal.Role)
        setExp(selectedVal.YearsOfExperience)
      }, []); 


    const updateData=()=>{
        // console.log(editId)
        const togetIndexVal = stdData.findIndex((val)=>val.id === editId)
        console.log(togetIndexVal)
        const updObj={
          id,
          name,
          Gender:gender,
          Role:role,
          YearsOfExperience:exp
        }
        console.log(updObj)
        //eg: arr[0]=updated data
        stdData[togetIndexVal]=updObj
        //setting the updated val
        setData([...stdData])
        //clearing inp fields after updating
        setId('')
        setName('')
        setGender('')
        setRole('')
        setExp('')
        navigate('/details')
       }


   
    return(
        <div className="inp-field">
<br></br>
        <TextField  id="filled-basic" label="Enter id" variant="filled" 
        onChange={(event)=>setId(event.target.value)}
        value={idX} />
  
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

      <Button id='add-btn' variant="contained" color='primary' 
        onClick={updateData}>
          Edit Data</Button>
       
          
  
        </div>
  
  
    )
}

export default EditDetails






