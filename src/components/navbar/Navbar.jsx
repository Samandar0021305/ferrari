import '../navbar/Navbar.css';
import {Link} from "react-router-dom";


function Navbar(){
    return(
        <nav className="navbar">
           <div className="container">
               <ul className='navbar-list'>
                   <li>
                       <Link to='/' style={{color:"white"}}>Auto</Link>
                   </li>
                   <li>
                       <Link to='/racing' style={{color:"white"}}>Racing</Link>
                   </li>
                   <li>
                       <Link to='/store' style={{color:"white"}}>Store</Link>
                   </li>
                   <li>
                       <Link to='/universe' style={{color:"white"}}>universe</Link>
                   </li>
                   <li>
                       <Link to='/corporate' style={{color:"white"}}>corporate</Link>
                   </li>
               </ul>
            
           </div>
        </nav>
    )
}

export default Navbar;