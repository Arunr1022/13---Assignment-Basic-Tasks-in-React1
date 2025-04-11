import img from '../images/wp1837063-dying-light-wallpapers.jpg'
import img2 from '../images/wp2940535-call-of-duty-4-game-wallpaper-hd.jpg'
import img3 from '../images/wp12013632-resident-evil-remaster-wallpapers.jpg'
import Games from '../components/Gamestyle'

function ListofGameSec2() {

    const Listgamesec2 = [{
        id:1,
        image1 : img,
        name1 : "Dying Light",
        price1 : `₹${1599}`
    },
    {
        id:2,
        image1 : img2,
        name1 : "Call Of Duty MW4",
        price1 : `₹${3299}`
    },
    {
        id:3,
        image1 : img3,
        name1 : "Resident Evil 4",
        price1 : `₹${2499}`
    }
]

    const MapListOfGames = Listgamesec2.map((item,id)=> <Games 
    key={id}  
    image1 = {item.image1}
    name1 = {item.name1}
    price1 = {item.price1}/>)

    return(
        <>
        <div className="game-wrapper">
        {MapListOfGames}
        </div>
        </>
    );

}

export default ListofGameSec2