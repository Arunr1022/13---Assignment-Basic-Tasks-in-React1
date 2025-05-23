import img from '../images/Mainpageimages/wp1837063-dying-light-wallpapers.jpg';
import img2 from '../images/Mainpageimages/wp2940535-call-of-duty-4-game-wallpaper-hd.jpg';
import img3 from '../images/Mainpageimages/wp12013632-resident-evil-remaster-wallpapers.jpg';
import img4 from '../images/Mainpageimages/wp9271975-days-gone-pc-4k-wallpapers.png';
import img5 from '../images/Mainpageimages/wp12005386-star-wars-jedi-survivor-standard-edition-wallpapers.jpg';
import img6 from '../images/Mainpageimages/wp3892792-marvels-spiderman-wallpapers.jpg';
import Games from '../components/Gamestyle';
import { useState } from 'react';

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
    },
    {
        id:4,
        image1 : img4,
        name1 : "Days Gone",
        discount1 : 13,
        price1 : 2499
    },
    {
        id:5,
        image1 : img5,
        name1 : "JEDI - Survivor",
        discount1 : 13,
        price1 : 2499
    },
    {
        id:6,
        image1 : img6,
        name1 : "Spiderman",
        discount1 : 13,
        price1 : 2499
    },
    
]);


    const MapListOfGames = Listgamesec2.map((item,id)=> <Games 
    key={id}  
    image1 = {item.image1}
    name1 = {item.name1}
    price1 = {item.price1}
    discount1={item.discount1}
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