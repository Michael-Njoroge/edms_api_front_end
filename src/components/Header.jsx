import { Link } from "react-router-dom"
import {FaSearch} from 'react-icons/fa';

export default function Header() {
  return (
    
    <header style={{backgroundColor:'rgb(226 232 240)', boxShadow:'0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'}}>

        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center',maxWidth:'72rem',marginLeft:'auto',marginRight:'auto', padding:'0.75rem'}}>

<Link to={'/'} style={{textDecoration:'none'}}>
        <h1 style={{fontWeight:'bold', fontSize: '14px',flexWrap:'wrap'}}>
            
        <span style={{color: 'rgb(100 116 139)'}}>DISI</span>
        <span style={{color:'rgb(51 65 85)'}}>EDMS</span>
        </h1>
        </Link>

        <form style={{backgroundColor:' rgb(241 245 249)', padding:'0.75rem', borderRadius:'12px',display:'flex',alignItems:'center'}}>
          <input style={{border:'none', backgroundColor:'transparent'}} type="text" placeholder="Search..." ></input>
          <FaSearch style={{color:'rgb(51 65 85'}}/>
        </form>

        <ul style={{display:'flex', gap:'16px',listStyle:'none',color:'rgb(51 65 85)'}}>
            <Link to={'/'} style={{textDecoration:'none'}}> <li >Home</li></Link>
           <Link to={'/sign-in'} style={{textDecoration:'none'}}> <li style={{textDecoration:'none'}}>Sign In</li> </Link>
        </ul>
        </div>
    </header>
   
  )
}
