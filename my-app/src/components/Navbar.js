import { NavLink } from 'react-router-dom';
import '/Users/fannyli/Projects/portfolio/my-app/src/App.css'
function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="nav-link" href="/">Fanny</a>
                {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> */}
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <NavLink activeClassName="active" to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink activeClassName="active" to="/aboutme" className="nav-link">About</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink activeClassName="active" to="/experiences" className="nav-link">Experiences</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink activeClassName="active" to="/contactme" className="nav-link">Contact Me</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;