
import GodOfwar from '../images/separateimages/wp11484884-god-of-war-ragnarok-desktop-wallpapers.jpg';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Godofwar() {

    const location = useLocation();
    const gameDetails = location.state?.game

    const systemreq = [
        {
            id : 1,
            cpu : "Intel Core i7 4770K AMD Ryzen 5 1500X",
            ram : "16GB",
            gpu : "Nvidia GeForce GTX 970 AMD Radeon RX 470/ Nvidia GeForce GTX 1050/ Ti AMD Radeon RX 5600 XT.",
            storage : "100GB SSD"
        }
    ];


    return(
        <>
            <nav className="navbar navbar-expand-lg bg-dark" id="navbarcustom">
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 custom">
                            <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Browse</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">News</Link>
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
        <div className="Lastofuscontainer">
        <div className='Lastofusdiv1'>
        <img className='Lastofus' src={GodOfwar} alt="..." />
        </div>

        <div className='Lastofusdiv2'>
        <h2 className='GameHeading'>God Of War Ragnorak</h2>
        <p className='details'>Full Edition</p>
        <p className="details">System Requirements</p>
        {systemreq.map((item, id)=>(
        <div key={id}>
        <p className='details'>Cpu : {item.cpu}</p>
        <p className='details'>RAM : {item.ram}</p>
        <p className='details'>Gpu : {item.gpu}</p>
        <p className='details'>Storage : {item.storage}</p>
        <p className='details'>-{gameDetails.discount}% <s>₹{gameDetails?.price}</s> ₹{gameDetails?.price - (gameDetails?.price * gameDetails?.discount / 100)}</p>     
        </div>
        ))}
        <button className='btn btn-primary b1'>Buy Now</button>
        </div>
        </div>
        </>
    );
    
}

export default Godofwar