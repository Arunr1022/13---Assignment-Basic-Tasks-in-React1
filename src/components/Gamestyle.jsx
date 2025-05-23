import { Link } from "react-router-dom";

function Gamestyle(props) {

    if (props.image) {
        return (
                <div className="gamingsection">
                <img className="gameimg" src={props.image} alt="...!" />
                <p className="gamename">{props.name}</p>

                {props.id === 1 && (
                <Link to="/Lou" state={{ game : props }}>
                    <button className="btn btn-primary">Add to cart</button>
                </Link>
                )}
                {props.id === 2 && (
                <Link to="/Godofwar" state={{ game : props }}>
                    <button className="btn btn-primary">Add to cart</button>
                </Link>
                )}
                {props.id === 3 && (
                <Link to="/AssasinCreed" state={{ game : props }}>
                    <button className="btn btn-primary">Add to cart</button>
                </Link>
                )}
                {props.id === 4 && (
                <Link to="/Wwwe2k25" state={{ game : props }}>
                    <button className="btn btn-primary">Add to cart</button>
                </Link>
                )}
                {props.id === 5 && (
                <Link to="/Gtav" state={{ game : props }}>
                    <button className="btn btn-primary">Add to cart</button>
                </Link>
                )}
                {props.id === 6 && (
                <Link to="/Gtav" state={{ game : props }}>
                    <button className="btn btn-primary">Add to cart</button>
                </Link>
                )}
                {props.id === 7 && (
                <Link to="/Gtav" state={{ game : props }}>
                    <button className="btn btn-primary">Add to cart</button>
                </Link>
                )}
                {props.id === 8 && (
                <Link to="/Gtav" state={{ game : props }}>
                    <button className="btn btn-primary">Add to cart</button>
                </Link>
                )}
                {props.id === 9 && (
                <Link to="/Gtav" state={{ game : props }}>
                    <button className="btn btn-primary">Add to cart</button>
                </Link>
                )}
                {props.id === 10 && (
                <Link to="/Gtav" state={{ game : props }}>
                    <button className="btn btn-primary">Add to cart</button>
                </Link>
                )}
                {props.id === 11 && (
                <Link to="/Gtav" state={{ game : props }}>
                    <button className="btn btn-primary">Add to cart</button>
                </Link>
                )}
                {props.id === 12 && (
                <Link to="/Gtav" state={{ game : props }}>
                    <button className="btn btn-primary">Add to cart</button>
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

                {props.name1 === "Dying Light" && (
                <Link to="/Dyinglight" state={{ game : props }}>
                    <button className="btn btn-primary">Add to cart</button>
                </Link>
                )}                

                {props.name1 === "Call Of Duty MW4" && (
                <Link to="/Callofdutymw" state={{ game : props }}>
                    <button className="btn btn-primary">Add to cart</button>
                </Link>
                )}  

                {props.name1 === "Resident Evil 4" && (
                <Link to="/Residentevil" state={{ game : props }}>
                    <button className="btn btn-primary">Add to cart</button>
                </Link>
                )} 
                {props.name1 === "Days Gone" && (
                <Link to="/Residentevil" state={{ game : props }}>
                    <button className="btn btn-primary">Add to cart</button>
                </Link>
                )} 
                {props.name1 === "JEDI - Survivor" && (
                <Link to="/Residentevil" state={{ game : props }}>
                    <button className="btn btn-primary">Add to cart</button>
                </Link>
                )} 
                {props.name1 === "Spiderman" && (
                <Link to="/Residentevil" state={{ game : props }}>
                    <button className="btn btn-primary">Add to cart</button>
                </Link>
                )} 
                </div>
        );
    }

}

export default Gamestyle