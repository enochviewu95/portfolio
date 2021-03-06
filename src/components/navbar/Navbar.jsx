/* eslint-disable jsx-a11y/anchor-is-valid */
import './Navbar.css';


/* A React component. */
export const Navbar = ({ imageUrl }) => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img className='float-start' src={imageUrl} alt="page logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-row justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav me-5 mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                    <div className='d-flex'>
                        <button className="btn btn-outline-success nav-button">LET'S TALK</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

