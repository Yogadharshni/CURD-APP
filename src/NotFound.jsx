import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
export function NotFound() {
  const navigate=useNavigate()
  return (
   
    <div>
      <Button variant='contained' onClick={()=>navigate('/')}>Back to Home Page</Button>
      <img src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif" alt="404 Not Found" className='not-found' />
    </div>
  );
}
