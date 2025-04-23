import { useState } from "react";
import { Link } from "react-router-dom";

function Gamestyle(props) {


    const [cart,setCart] = useState(false);
    const [discount, setDiscount] = useState(0)
    const [discount1, setDiscount1] = useState(0)

    function cartgame() {
        setCart (true);
    }

    function disAmt(disPrice) {
        setDiscount(props.price - (props.price * disPrice /100));
    }

    function disAmt1(disPrice1) {
        setDiscount1(props.price1 -(props.price1 * disPrice1 /100));
    }

    function cartgame2() {
        setCart(true);
    }
    
    if (props.image) {
        return (
                <div className="gamingsection">
                <img className="gameimg" src={props.image} alt="...!" />
                <p className="gamename">{props.name}</p>
                <p className="gameprice">{props.price}</p>
                <p className="gamediscount">{props.discount}</p>
                <p>{discount}</p>
                <button onClick={ ()=> disAmt(props.discount) }>Discount</button>
                <Link to={"/lou"}>
                <button onClick={cartgame}>Add to cart</button>
                </Link>

                <button onClick={ ()=> {props.delete(props.id)}}>Delete</button>
                <p>{cart ? `${props.name} Added to cart` : ""}</p>
            </div>
        );
    }
   

    if (props.image1) {
        return (

                <div className="gamingsection2">
                <img className="gameimg1" src={props.image1} alt="..." />
                <p className="gamename1">{props.name1}</p>
                <p className="gameprice">{props.price1}</p>
                <p className="gamediscount">{props.discount1}</p>
                <p>{discount1}</p>
                <button onClick={ ()=> disAmt1(props.discount1) }>Discount</button>
                <button onClick={cartgame2}>Add to cart</button>
                <button onClick={ ()=> {props.delete(props.id)}}>Delete</button>
                <p>{cart ? `${props.name1} Added to cart` : "" }</p>
                </div>
        );
    }

}

export default Gamestyle