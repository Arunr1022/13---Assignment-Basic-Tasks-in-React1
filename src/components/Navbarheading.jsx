import { Link } from "react-router-dom";

function Navbar() {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark fixed-top" id="navbarcustom">
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 custom">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Browse</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">News</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search Store" aria-label="Search" id="inputtext"/>
                                <button className="btn btn-outline-success" type="submit" id="search">Search</button>
                                <Link to="/Signin" >
                                <button className="btn btn-outline-success" type="submit" id="signin">Sign in</button>
                                </Link>
                                
                        </form>
                    </div>
            </nav>
        </>
    );
}

export default Navbar