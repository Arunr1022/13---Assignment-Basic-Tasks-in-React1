import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {


    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [mobilenum, setMobilenum] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');

    const handleSubmit = (e) => {

        e.preventDefault();

        if(username.length <=5 || username == "" ){
            alert("Invalid Username, Username should be aleast 5 Characters.")
            return;
        }

        if (!/[@]/.test(email) || !/\.(com|org|net)$/.test(email)) {
            alert("Invalid Email ID");
            return;
        } 

        if(mobilenum.length !== 10){
            alert("Invalid Mobile Number, Enter the 10 Digit Mobile Number!");
            return;
        }

        if(password.length <=10 || !/[A-Z]/.test(password) || !/\d/.test(password) || !/[!@#$%^&*]/.test(password)){
            alert("Invalid Password");
            return;
        }

        if(confirmpassword !== password){
            alert("Password is not same");
            return;
        }

        alert("Account Created Successfully");
    
    }

    return(
        <>
            <form className="signuppage" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="Username1" className="form-label">Username : </label>
                    <input type="text" className="form-control" id="Username1" value={username} onChange={ (e) => setUsername(e.target.value) }></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="InputEmail1" className="form-label">Email ID : </label>
                    <input type="text" className="form-control" id="InputEmail1" value={email} onChange={ (e) => setEmail(e.target.value) }></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="Mnumber1" className="form-label">Mobile Number : </label>
                    <input type="text" className="form-control" id="Mnumber1" value={mobilenum} onChange={ (e) => setMobilenum(e.target.value) }></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="InputPassword1" className="form-label">Password : </label>
                    <input type="password" className="form-control" id="InputPassword1" value={password} onChange={ (e) => setPassword(e.target.value) }></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="InputPassword1" className="form-label">Confirm Password : </label>
                    <input type="password" className="form-control" id="InputPassword2" value={confirmpassword} onChange={ (e) => setConfirmpassword(e.target.value) }></input>
                </div>                
                <button type="submit" className="btn btn-primary">SignUp</button>
                <Link to="/">
                <div className="Homepage">Home</div>
                </Link>
            </form>
        </>
    );
    
}

export default Signup