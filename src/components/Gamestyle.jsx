import { useState } from "react";

function Gamestyle(props) {

    const [purchased, setPurchased] = useState(false);

    function cartgame() {
        console.log(props.name,"Added to cart");
        setPurchased(true);
        console.log(purchased);

    }
    
    if (props.image) {
        return (
                <div className="gamingsection">
                <img className="gameimg" src={props.image} alt="...!" />
                <p className="gamename">{props.name}</p>
                <p className="gameprice">{props.price}</p>
                <button onClick={cartgame}>Add to cart</button>
                <p>{purchased ? `${props.name} Added to cart` : "Get it now"}</p>
            </div>
        );
    }

    if (props.image1) {
        return (

                <div className="gamingsection2">
                <img className="gameimg1" src={props.image1} alt="..." />
                <p className="gamename1">{props.name1}</p>
                <p className="gameprice">{props.price1}</p>
                <p></p>
                </div>
        );
    }

}

export default Gamestyle