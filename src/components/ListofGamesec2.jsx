import img from '../images/wp1837063-dying-light-wallpapers.jpg'
import img2 from '../images/wp2940535-call-of-duty-4-game-wallpaper-hd.jpg'
import img3 from '../images/wp12013632-resident-evil-remaster-wallpapers.jpg'
import Games from '../components/Gamestyle'
import { useState } from 'react'

function ListofGameSec2() {

    const [Listgamesec2,setListgamesec2] = useState ([{
        id:1,
        image1 : img,
        name1 : "Dying Light",
        discount1 : 33,
        price1 : 1599
    },
    {
        id:2,
        image1 : img2,
        name1 : "Call Of Duty MW4",
        discount1 : 17,
        price1 : 3299
    },
    {
        id:3,
        image1 : img3,
        name1 : "Resident Evil 4",
        discount1 : 13,
        price1 : 2499
    }
]);

function GameDel2(id) {
    const newListgameSec2 = Listgamesec2.filter ((game)=> game.id != id);
    setListgamesec2(newListgameSec2);
}

    const MapListOfGames = Listgamesec2.map((item,id)=> <Games 
    key={id}  
    image1 = {item.image1}
    name1 = {item.name1}
    price1 = {item.price1}
    discount1={item.discount1}
    delete = {GameDel2}
    id = {item.id}
    />)

    return(
        <>
        <div className="game-wrapper">
        {MapListOfGames}
        </div>
        </>
    );

}

export default ListofGameSec2