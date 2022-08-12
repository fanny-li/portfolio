import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-item">
                <a href="https://www.linkedin.com/in/fanny-li-0430b31b6/" target="_blank" rel="noreferrer noopener"><i class="fa-brands fa-linkedin fa-xl"></i></a>
            </div>
            <div className="sidebar-item">
                <a href="https://github.com/fanny-li" target="_blank" rel="noreferrer noopener"><i class="fa-brands fa-square-github fa-xl"></i></a>
            </div>
            <div className="sidebar-item">
                <i class="fa-solid fa-file fa-xl"></i>
            </div>
        </div>
    )
}

export default Sidebar;