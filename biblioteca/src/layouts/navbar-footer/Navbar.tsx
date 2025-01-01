 import { Link, NavLink } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import { SpinnerLoading } from "../Utils/SpinnerLoading";

const logo = require("../../Images/logo.png")
export const Navbar = () => {
    const { oktaAuth, authState } = useOktaAuth();

    if(!authState) {
        return <SpinnerLoading/>
    }

    const handleLogout = async () => oktaAuth.signOut();

    console.log(authState);
    return (
        <nav className='navbar navbar-expand-lg main-color py-3 navbar-dark'>
            <div className='container-fluid'>
                <span>
                    <img className='navbar-brand' height="55px" width="auto" src={logo} alt="Biblioteca logo" />
                </span>
                <button className='navbar-toggler' type='button'
                    data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown'
                    aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle Navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNavDropdown'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <NavLink to="/home" className='nav-link'>Home</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to="/search" className='nav-link'>Search</NavLink>
                        </li>
                        {authState.isAuthenticated &&
                            <li className="nav-item">
                                <NavLink className='nav-link' to='/shelf'>Shelf</NavLink>
                                
                            </li>
                        }
                    </ul>
                    <ul className='navbar-nav ms-auto'>
                    {!authState.isAuthenticated ?
                        <li className='nav-item m-1'>
                            <Link type='button' to="/login" className='btn btn-outline-light'>Sign in</Link>
                        </li>
                    :
                    <li>
                        <button className='btn btn-outline-light' onClick={handleLogout}>Logout</button>
                    </li>
                    
                    }

                        <li className='nav-item m-1'>
                            <a type='button' href="" className='btn btn-outline-light'>Sign up</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
} 