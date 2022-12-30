import { useState } from "react";

const Navbar = () => {

    const [btn1, setBtn1] = useState(false);
    const [btn2, setBtn2] = useState(false);
    const [btn3, setBtn3] = useState(false);
    const [btn4, setBtn4] = useState(false);

    function handleClick(event) {
        let id = event.target.id;
        switch (id) {
            case "btn1":
                setBtn1(true);
                setBtn2(false);
                setBtn3(false);
                setBtn4(false);
                break;
            case "btn2":
                setBtn1(false);
                setBtn2(true);
                setBtn3(false);
                setBtn4(false);
                break;
            case "btn3":
                setBtn1(false);
                setBtn2(false);
                setBtn3(true);
                setBtn4(false);
                break;
            case "btn4":
                setBtn1(false);
                setBtn2(false);
                setBtn3(false);
                setBtn4(true);
                break;
            default:
                setBtn1(false);
                setBtn2(false);
                setBtn3(false);
                setBtn4(false);
                break;
        }
    }

    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid">
                <a className="nav-link" href="/">Fanny</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav">
                        <li className="nav-item">
                            <a id="btn1" className={btn1 ? "nav-link active" : "nav-link"} href='#root' onClick={handleClick}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a id="btn2" className={btn2 ? "nav-link active" : "nav-link"} href="#aboutme" onClick={handleClick}>About</a>
                        </li>
                        <li className="nav-item">
                            <a id="btn3" className={btn3 ? "nav-link active" : "nav-link"} href='#experience-container' onClick={handleClick}>Experiences</a>
                        </li>
                        <li className="nav-item">
                            <a id="btn4" className={btn4 ? "nav-link active" : "nav-link"} href='#contactme' onClick={handleClick}>Contact Me</a>
                        </li>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;