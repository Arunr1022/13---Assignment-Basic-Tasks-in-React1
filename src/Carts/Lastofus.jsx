import Lou from '../images/separateimages/wp2243855-tlou-wallpapers.jpg';
import { useLocation } from 'react-router-dom';

function Lastofus() {

    const location = useLocation();
    const gameDetails = location.state?.game;


    const systemreq = [
        {
            id : 1,
            cpu : "Intel Core i7 4770K AMD Ryzen 5 1500X",
            ram : "16GB",
            gpu : "Nvidia GeForce GTX 970 AMD Radeon RX 470/ Nvidia GeForce GTX 1050/ Ti AMD Radeon RX 5600 XT.",
            storage : "100GB SSD"
        },
    ];


    return(
        <>
        <div className="Lastofuscontainer">
        <div className='Lastofusdiv1'>
        <img className='Lastofus' src={Lou} alt="..." />
        </div>

        <div className='Lastofusdiv2'>
        <h2 className='GameHeading'>{gameDetails?.name}</h2>
        <p className='details'>Full Edition</p>
        <p className="details">System Requirements</p>
        {systemreq.map((item, id)=>(
        <div key={id}>
        <p className='details'>Cpu : {item.cpu}</p>
        <p className='details'>RAM : {item.ram}</p>
        <p className='details'>Gpu : {item.gpu}</p>
        <p className='details'>Storage : {item.storage}</p>
        <p className='details'>-{gameDetails.discount}% <s>₹{gameDetails?.price}</s> ₹{gameDetails?.price - (gameDetails?.price * gameDetails?.discount / 100)} </p>
        </div>
        ))}
        <button className='btn btn-primary b1'>Buy Now</button>
        </div>
        </div>
        </>
    );
    
}

export default Lastofus