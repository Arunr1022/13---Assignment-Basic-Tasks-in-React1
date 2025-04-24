import Wwwe2k25 from '../images/separateimages/wp15019330-wwe-2k25-wallpapers.webp';

function Wwe2k25Full() {

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
        <img className='Lastofus' src={Wwwe2k25} alt="..." />
        </div>

        <div className='Lastofusdiv2'>
        <h2 className='GameHeading'>WWE 2k25</h2>
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

export default Wwe2k25Full