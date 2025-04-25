import Dlights from '../images/separateimages/wp1837072-dying-light-wallpapers.jpg';

function DieLights() {

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
        <p className='p1'>Full Edition</p>
        <p className="p2">System Requirements</p>
        {systemreq.map((item, id)=>(
        <div key={id}>
        <p className='p3'>Cpu : {item.cpu}</p>
        <p className='p4'>RAM : {item.ram}</p>
        <p className='p5'>Gpu : {item.gpu}</p>
        <p className='p6'>Storage : {item.storage}</p>       
        </div>
        ))}
        <button className='btn btn-primary b1'>Buy Now</button>
        </div>
        </div>
        </>
    );
    
}

export default DieLights