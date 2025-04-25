import { useState } from "react";
import { Link } from "react-router-dom";

function Signin() {

    const [email, setEmail] = useState('');
    const [userpassword, setUserpassword] = useState('');


    const handleSubmit = (e) => {

        if(!email){
            alert("Email Id is required !");
            return;
        }

        if(!/\S+@\S+\.\S+/.test(email)){
            alert("Please enter the valid email ID!");
            return;
        }

        if(!userpassword){
            alert("Password field is empty");
            return;
        }

        alert("Logged in Successfully");

    };


    return (
        <>
            <form className="signinpage" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="InputEmail1" className="form-label">Email address : </label>
                    <input type="email" className="form-control" id="InputEmail1" value={email} onChange={(e) => setEmail(e.target.value) } ></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="InputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="InputPassword1" value={userpassword} onChange={ (e) => setUserpassword(e.target.value) }></input>
                </div>
                <button type="submit" className="btn btn-primary">Sign In</button>
                <Link to="/Signup">
                <div className="Newaccountpage">Need an account ?</div>
                </Link>
                <Link to="/">
                <div className="Homepage">Home</div>
                </Link>
            </form>
        </>
    );

}

export default Signin