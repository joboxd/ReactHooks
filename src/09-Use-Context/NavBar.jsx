import { Link, NavLink } from 'react-router-dom'

function NavBar() {
    return (
        // <Link to="/">Home</Link>
        //     <Link to="/login">Login</Link>
        //     <Link to="/about">About</Link>
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark rounded-3">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">useContext</Link>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink
                            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                            to="/">
                            Home
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                            to="/about">
                            About
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                            to="/login">
                            Login
                        </NavLink>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar