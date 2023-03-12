import { Children, useState } from 'react'
import './App.css'
import { Studentdetails } from './Studentdetails'
import { Home } from './Home'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { NotFound } from './NotFound'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { ViewProfile } from './ViewProfile'
import {data} from './data';
import AddDetails from './AddDetails'
import EditDetails from './EditDetails'
import { LogOut } from './LogOut'

function App() {
  const navigate=useNavigate()
  const[stdData,setData]=useState(data)
  return (
    <div className="App">
<div className="main-dib"><AppBar position="static">
        <Toolbar>
          <Button onClick={()=>navigate("/")} color="inherit">Home</Button>
          <Button onClick={()=>navigate("/details")}  color="inherit">Employees</Button>
          <Button onClick={()=>navigate("/add-data")}  color="inherit">Add Data</Button>
          <Button sx={{marginLeft:'auto'}} onClick={()=>navigate("/thank-you")}  color="inherit">Logout</Button>
        </Toolbar>
        </AppBar>
   </div>
<Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/details' element={<Studentdetails stdData={stdData} setData={setData} />}></Route>
<Route path='/details/:id' element={<ViewProfile stdData={stdData} />}></Route>
<Route path='/edit/:id' element={<EditDetails stdData={stdData} setData={setData}/>}></Route>
<Route path='/add-data' element={<AddDetails stdData={stdData} setData={setData} />}></Route>
<Route path='/thank-you' element={<LogOut/>}></Route>
<Route path='*' element={<NotFound/>}></Route>
</Routes>
    </div>
  )
}

export default App



