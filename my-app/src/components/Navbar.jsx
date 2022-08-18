import { NavLink } from 'react-router-dom';
import '/Users/fannyli/Projects/portfolio/my-app/src/App.css'
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg sticky-top">
            <div className="container-fluid">
                <a className="nav-link" href="/">Fanny</a>
                {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink activeclassname="active" to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeclassname="active" to="/aboutme" className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeclassname="active" to="/experiences" className="nav-link">Experiences</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeclassname="active" to="/contactme" className="nav-link">Contact Me</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;