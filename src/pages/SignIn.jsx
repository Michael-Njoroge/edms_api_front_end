import React from 'react'

export default function SignIn() {
  return (
    <div style={{maxWidth:'32rem',padding:'0.75rem',marginRight:'auto',marginLeft:'auto'}}>
    <h1 style={{fontSize: '30px',textAlign:'center',fontWeight:'bold', marginTop:'20px' }}>SignIn</h1>
    <form style={{display:'flex',flexDirection:'column',gap:'15px'}}>
        <input style={{border:'border', padding:'12px', borderRadius:'0.75rem'}} type="text" placeholder='Username' id='username'/>
        <input style={{border:'border', padding:'12px', borderRadius:'0.75rem'}} type="password" placeholder='Password' id='password'/>
        <button style={{backgroundColor:'rgb(51 65 85)',color:'white',padding:'0.75rem',borderRadius:'0.75rem',textTransform:'uppercase'}}>Sign In</button>
    </form>
    </div>
  )
}
 