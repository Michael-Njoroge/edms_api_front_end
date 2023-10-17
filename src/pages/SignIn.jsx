 import { useState } from 'react'
 import { useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart,signInSuccess,signInFailure } from '../redux/user/userSlice';
 
export default function SignIn() {
  const navigate =useNavigate();
  const dispatch = useDispatch();
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);
  const {loading, error} = useSelector((state) => state.user);
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
  dispatch(signInStart())
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
dispatch(signInFailure(data.message));
    return;
  }
dispatch(signInSuccess(data))
  navigate('/');
} catch (error) {  
  dispatch(signInFailure(error.message));
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
 