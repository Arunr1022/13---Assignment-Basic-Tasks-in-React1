import Image1 from '../images/wp9723146-last-of-us-4k-phone-wallpapers.jpg'
import Image2 from '../images/wp13048647-god-of-war-ragnarok-iphone-wallpapers.jpg'
import Image3 from '../images/wp13980258-assassins-creed-shadows-phone-wallpapers.jpg'
import Image4 from '../images/wp15019307-wwe-2k25-wallpapers.webp'
import Image5 from '../images/wp4897806-gta-5-iphone-wallpapers.jpg'
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
    ]);

    function GameDel(id) {
        const newGamecollection = GameCollection.filter ((game)=> game.id != id)
        setGameCollection(newGamecollection);
        
    }



    const gaming = GameCollection.map((item,id) => <Games 
    key={id} 
    image={item.image} 
    name={item.name} 
    price={item.price}
    discount={item.discount}
    delete = {GameDel}
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