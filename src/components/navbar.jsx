import { Link,NavLink } from "react-router-dom"
export default function Navbar(){
    return(
        <div className="navbar">
            <Link to={'/Home'} className="logo">
                <h1 className="navbarLogo" >MORSE</h1>
                <i class="fa-solid fa-cubes"></i>
            </Link>
            <div className="links">
                <NavLink to={'/Home'}>Home</NavLink>
                <NavLink to={'/Learn'}>Learn</NavLink>
                <NavLink to={'/feedback'}>Contact</NavLink>
            </div>
        </div>
    )
}
