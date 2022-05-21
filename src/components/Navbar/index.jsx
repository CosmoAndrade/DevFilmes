import { Link, NavLink } from 'react-router-dom';
import './index.css'

const Navbar = () => {
    return ( 
        <header>
             <nav class="container">

            <NavLink to={'/'}>
            <h1>DevMovie</h1>
            </NavLink>
          
            
            <div class="dsmovie-contact-container">
               <Link to={'/favoritos'} className='btn btn-primary'>Favoritos</Link>
            </div>

        </nav>

        </header>
     );
}
 
export default Navbar;