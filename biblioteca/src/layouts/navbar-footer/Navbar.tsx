const logo = require("../../Images/logo.png")
export const Navbar = () => {
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
                            <a href="" className='nav-link'>Home</a>
                        </li>
                        <li className='nav-item'>
                            <a href="" className='nav-link'>Search</a>
                        </li>
                    </ul>
                    <ul className='navbar-nav ms-auto'>
                        <li className='nav-item m-1'>
                            <a type='button' href="" className='btn btn-outline-light'>Sign in</a>
                        </li>
                        <li className='nav-item m-1'>
                            <a type='button' href="" className='btn btn-outline-light'>Sign up</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
