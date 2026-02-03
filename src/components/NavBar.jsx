import {Link, NavLink} from "react-router-dom"
import logo from "../assets/Logo.png"
function NavBar() {
 

  return (
    <>
        <header>
              <img src={logo} alt="" />  
            <nav>
                <Link to="/">HOMEPAGE</Link>
                <NavLink to="/Products">I NOSTRI PRODOTTI</NavLink>
                <NavLink to="/AboutUs">CHI SIAMO</NavLink>

            </nav>
        </header>
    </>
  )
}

export default NavBar
