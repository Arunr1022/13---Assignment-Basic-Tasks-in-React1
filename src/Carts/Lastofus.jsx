import Lou from '../images/separateimages/wp2243855-tlou-wallpapers.jpg';

function Lastofus() {

    return(
        <>
        <div className="Lastofuscontainer">
        <div className='Lastofusdiv1'>
        <img className='Lastofus' src={Lou} alt="..." />
        </div>

        <div className='Lastofusdiv2'>
        <h2 className='GameHeading'>Last Of Us</h2>
        <p className='p1'>Full Edition</p>
        <p className="p2">System Requirements</p>
        <p className="p3">CPU       : Intel Core i7 4770K AMD Ryzen 5 1500X</p>
        <p className="p4">RAM       : 16GB</p>
        <p className="p5">GPU       : Nvidia GeForce GTX 970 AMD Radeon RX 470, Nvidia GeForce GTX 1050, Ti AMD Radeon RX 5600 XT</p>
        <p className="p6">Storage   : 100GB SSD</p>
        </div>
        </div>
        </>
    );
    
}

export default Lastofus