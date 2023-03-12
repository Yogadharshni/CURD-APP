import * as React from 'react';
import {data} from './data';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import './App.css'




export function Studentdetails({stdData ,setData}) {
 const navigate=useNavigate()

 //deleting data
 const deleteData=(valId)=>{
  console.log('deletingg')
  const delData=stdData.filter((val)=>val.id !== valId )
  //checking wether the clicked id's are equal...if yes we are deleting it
  setData(delData)
 }



 
  return (
   
    <div className="container">
    <div className='card-container'>
      {stdData.map((val,id)=>(
       <Card sx={{ maxWidth: 345 }} key={val.id} className='card'>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {val.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Gender:{val.Gender}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Role:{val.Role}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Year of Experience:{val.YearsOfExperience} Years
        </Typography>
      </CardContent>
      <CardActions>
        <Button  color='secondary' size="small"
        onClick={()=>navigate(`/edit/${id}`)}>
          Edit</Button>

        <Button  color='error' size="small"
        onClick={()=>deleteData(val.id)}>
          Delete</Button>
 
       <Button  size="small"
       onClick={()=>navigate(`/details/${id}`)}>
        View Details</Button>

      </CardActions>
    </Card>
    ))}
    </div></div>
   
  );
  
}
