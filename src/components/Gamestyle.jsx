import { useState } from "react";
import { Link } from "react-router-dom";

function Gamestyle(props) {


    const [discount, setDiscount] = useState(0)
    const [discount1, setDiscount1] = useState(0)


    function disAmt(disPrice) {
        setDiscount(props.price - (props.price * disPrice /100));
    }

    function disAmt1(disPrice1) {
        setDiscount1(props.price1 -(props.price1 * disPrice1 /100));
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

                {props.id === 1 && (
                <Link to="/Lou" state={{ game : props }}>
                    <button >Add to cart</button>
                </Link>
                )}
                {props.id === 2 && (
                <Link to="/Godofwar">
                    <button >Add to cart</button>
                </Link>
                )}
                {props.id === 3 && (
                <Link to="/AssasinCreed">
                    <button >Add to cart</button>
                </Link>
                )}
                {props.id === 4 && (
                <Link to="/Wwwe2k25">
                    <button >Add to cart</button>
                </Link>
                )}
                {props.id === 5 && (
                <Link to="/Gtav">
                    <button >Add to cart</button>
                </Link>
                )}                
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

                {props.name1 === "Dying Light" && (
                <Link to="/Dyinglight">
                    <button >Add to cart</button>
                </Link>
                )}                

                {props.name1 === "Call Of Duty MW4" && (
                <Link to="/Callofdutymw">
                    <button >Add to cart</button>
                </Link>
                )}  

                {props.name1 === "Resident Evil 4" && (
                <Link to="/Residentevil">
                    <button >Add to cart</button>
                </Link>
                )} 
                </div>
        );
    }

}

export default Gamestyle