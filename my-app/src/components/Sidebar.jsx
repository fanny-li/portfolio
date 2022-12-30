import resume from "./document/Resume.pdf";

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="sidebar-sticky">
                <div className="sidebar-item">
                    <a href="https://www.linkedin.com/in/fanny-li-0430b31b6/" target="_blank" rel="noreferrer noopener"><i class="fa-brands fa-linkedin fa-xl"></i></a>
                </div>
                <div className="sidebar-item">
                    <a href="https://github.com/fanny-li" target="_blank" rel="noreferrer noopener"><i class="fa-brands fa-square-github fa-xl"></i></a>
                </div>
                <div className="sidebar-item">
                    <a href={resume} target="_blank"><i class="fa-solid fa-file fa-xl"></i></a>

                </div>
            </div>

        </div>
    )
}

export default Sidebar;