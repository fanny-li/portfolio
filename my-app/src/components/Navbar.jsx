import { NavLink } from 'react-router-dom';
import '/Users/fannyli/Projects/portfolio/my-app/src/App.css'
import { useState } from 'react';
function Navbar() {

    const [buttonActive, setButtonActive] = useState(0);

    function handleClick() {

    }
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid">
                <a className="nav-link" href="/">Fanny</a>
                {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a to="/" className="nav-link" href='#root'>Home</a>
                        </li>
                        <li className="nav-item">
                            <a to="/aboutme" className="nav-link" href="#aboutme">About</a>
                        </li>
                        <li className="nav-item">
                            <a to="/experiences" className="nav-link" href='#experience-container'>Experiences</a>
                        </li>
                        <li className="nav-item">
                            <a to="/contactme" className="nav-link" href='#contactme'>Contact Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;