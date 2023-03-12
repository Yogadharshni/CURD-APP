import { Studentdetails } from './Studentdetails'
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import {useNavigate } from 'react-router-dom'
import './App.css'

export function ViewProfile({stdData}) {
  console.log('viewwedd')
  const{id}=useParams()
  const val=stdData[id]

  const navigate=useNavigate()
  return (
    <div className="profile-div"> <br></br><br></br>
     <h1>Hello, This is {val.name} </h1><br></br>
     <h2>I'm <i>{val.Role} </i> and has '<i>{val.YearsOfExperience}</i> ' Years of Experience.</h2><br></br><br></br><br></br>
     <h2>Thank you for Visiting my Profile!!</h2>
     <br></br>
     <Button color='primary' variant='contained' onClick={()=>navigate('/details')}>Back</Button>
    </div>
  );
}
