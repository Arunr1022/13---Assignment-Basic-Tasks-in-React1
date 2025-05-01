import Image1 from '../images/Mainpageimages/wp9723146-last-of-us-4k-phone-wallpapers.jpg';
import Image2 from '../images/Mainpageimages/wp13048647-god-of-war-ragnarok-iphone-wallpapers.jpg';
import Image3 from '../images/Mainpageimages/wp13980258-assassins-creed-shadows-phone-wallpapers.jpg';
import Image4 from '../images/Mainpageimages/wp15019307-wwe-2k25-wallpapers.webp';
import Image5 from '../images/Mainpageimages/wp4897806-gta-5-iphone-wallpapers.jpg';
import Image6 from '../images/Mainpageimages/wp5380267-cyberpunk-android-hd-wallpapers.jpg';
import Image7 from '../images/Mainpageimages/wp13014345-tomb-raider-phone-wallpapers.png';
import Image8 from '../images/Mainpageimages/wp5866296-motogp-iphone-wallpapers.jpg';
import Image9 from '../images/Mainpageimages/wp5455299-wrc-mobile-wallpapers.jpg';
import Image10 from '../images/Mainpageimages/wp12532534-star-wars-jedi-survivor-characters-wallpapers.jpg';
import Games from './Gamestyle'
import { useState } from 'react'

function ListofGames() {

    const [GameCollection, setGameCollection ] = useState([{
        id : 1,
        image : Image1,
        name : "The Last Of Us",
        price : 3999,
        discount : 20
    },
    {
        id : 2,
        image : Image2,
        name : "God Of War - Ragnarok",
        price : 4999,
        discount : 30
    },
    {
        id : 3,
        image : Image3,
        name : "Assassin Creed - Shadows",
        price : 2499,
        discount : 10
    },
    {
        id : 4,
        image : Image4,
        name : "WWE - 2k25",
        price : 3499,
        discount : 15
    },
    {
        id : 5,
        image : Image5,
        name : "GTA - V",
        price : 1499,
        discount : 25
    },
    {
        id : 6,
        image : Image6,
        name : "CyberPunk - 2077",
        price : 1499,
        discount : 25
    },

    {
        id : 7,
        image : Image7,
        name : "Tomb Rider",
        price : 1499,
        discount : 25
    },

    {
        id : 8,
        image : Image8,
        name : "Moto GP - 25",
        price : 1499,
        discount : 25
    },

    {
        id : 9,
        image : Image9,
        name : "EA-Sportz - WRC",
        price : 1499,
        discount : 25
    },

    {
        id : 10,
        image : Image10,
        name : "Jedi - The Fallen Order",
        price : 1499,
        discount : 25
    },
    ]);


    const gaming = GameCollection.map((item,id) => <Games 
    key={id} 
    image={item.image} 
    name={item.name} 
    price={item.price}
    discount={item.discount}
    id={item.id}
    />)

    return(
        <>
        <div className='game-wrapper'>
        {gaming}
        </div>
        </>
    );
}

export default ListofGames