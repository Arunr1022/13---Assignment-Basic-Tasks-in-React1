import Dlights from '../images/separateimages/wp1837072-dying-light-wallpapers.jpg';
import { useLocation } from 'react-router-dom';

function DieLights() {

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
        <div className="Lastofuscontainer">
        <div className='Lastofusdiv1'>
        <img className='Lastofus' src={Dlights} alt="..." />
        </div>

        <div className='Lastofusdiv2'>
        <h2 className='GameHeading'>Dying Light</h2>
        <p className='details'>Full Edition</p>
        <p className="details">System Requirements</p>
        {systemreq.map((item, id)=>(
        <div key={id}>
        <p className='details'>Cpu : {item.cpu}</p>
        <p className='details'>RAM : {item.ram}</p>
        <p className='details'>Gpu : {item.gpu}</p>
        <p className='details'>Storage : {item.storage}</p> 
        <p className="details">-{gameDetails.discount1}% <s>₹{gameDetails?.price1}</s> ₹{gameDetails?.price1 - (gameDetails?.price1 * gameDetails?.discount1 / 100)}</p>      
        </div>
        ))}
        <button className='btn btn-primary b1'>Buy Now</button>
        </div>
        </div>
        </>
    );
    
}

export default DieLights