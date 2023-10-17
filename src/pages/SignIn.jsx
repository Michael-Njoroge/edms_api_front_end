 import { useState } from 'react'
 import { useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';
import { Link } from 'react-router-dom';
//  app.use((err,req,res,next)=>{
//   const statusCode = err.statusCode || 500;
//   const message = err.message || 'Internal Server Error';
//   return res.status(statusCode).json({
//     success: false,
//     statusCode,
//     message,
//   });
//  });

export default function SignIn() {
  const navigate =useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});
const handleChange = (e) => {
  setFormData({
    ...formData, 
    [e.target.id]: e.target.value,
  });
};

const handleSubmit = async(e) => {
  e.preventDefault();
try {
  setLoading(true);
  const response  = await fetch('http://127.0.0.1:8000/api/auth/login',{
    method:'POST',
    headers:{
      'Content-Type':'application/json',
    },
    body:JSON.stringify(formData),
  });
  const  data = await response.json();
  console.log(data)

  if(!data.ok){
    setLoading(false);
    setError(data.message);
    return;
  }
  setLoading(false);
  setError(null);
  navigate('/');
} catch (error) {  
  setLoading(false);
  setError(error.message)
}
}
console.log(formData)

  return (
    <div style={{maxWidth:'32rem',padding:'0.75rem',marginRight:'auto',marginLeft:'auto'}}>
      
    <h1 style={{fontSize: '30px',textAlign:'center',fontWeight:'bold', marginTop:'20px' }}>SignIn</h1>
    <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',gap:'15px'}}>
        <input style={{border:'1px ', padding:'12px', borderRadius:'0.75rem'}} type="text" placeholder='Username' id='username' onChange={handleChange}/>
        <input style={{border:'1px  ', padding:'12px', borderRadius:'0.75rem'}} type="password" placeholder='Password' id='password' onChange={handleChange}/>
        <button disabled={loading} style={{backgroundColor:'rgb(51 65 85)',color:'white',padding:'0.75rem',borderRadius:'0.75rem',textTransform:'uppercase',cursor:'pointer'}}>{loading ? 'Please Wait...' : 'Sign In'}</button>
        <OAuth/>
    </form>
    <Link to={''} style={{textDecoration:'none'}}>
    <p style={{color:'rgb(14 165 233)', marginTop:'5px',paddingTop:'1.25rem'}}>Forgot password?</p>
    </Link>
    {error && <p style={{color:'rgb(239 68 68)', marginTop:'1.25rem'}}>{error}</p> }
    </div>
  )
}
 