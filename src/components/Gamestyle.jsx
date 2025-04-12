import { useState } from "react";

function Gamestyle(props) {


    const [purchased,setPurchased] = useState(false);
    const [discount, setDiscount] = useState(props.price)
    const [discount1, setDiscount1] = useState(props.price1)

    function cartgame() {
        console.log(props.name,"Added to cart");
        setPurchased (true);
        console.log(purchased);
    }

    function disAmt(disPrice) {
        setDiscount(discount - (discount * disPrice /100));
        console.log(discount);
    }

    function disAmt1(disPrice1) {
        setDiscount1(discount1 -(discount1 * disPrice1 /100));
        console.log(discount1);
    }

    function cartgame2() {
        console.log(props.name1,"Added to cart")
        setPurchased(true);
        console.log(purchased)
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
                <button onClick={cartgame}>Add to cart</button>
                <button onClick={ ()=> {props.delete(props.id)}}>Delete</button>
                <p>{purchased ? `${props.name} Added to cart` : ""}</p>
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
                <p>{purchased ? `${props.name1} Added to cart` : "" }</p>
                </div>
        );
    }

}

export default Gamestyle