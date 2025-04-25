function Signup() {

    return(
        <>
            <form className="signuppage">
                <div className="mb-3">
                    <label htmlFor="Username1" className="form-label">Username : </label>
                    <input type="email" className="form-control" id="Username1"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="InputEmail1" className="form-label">Email ID : </label>
                    <input type="password" className="form-control" id="InputEmail1"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="Mnumber1" className="form-label">Mobile Number : </label>
                    <input type="number" className="form-control" id="Mnumber1"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="InputPassword1" className="form-label">Password : </label>
                    <input type="password" className="form-control" id="InputPassword1"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="InputPassword1" className="form-label">Confirm Password : </label>
                    <input type="password" className="form-control" id="InputPassword1"></input>
                </div>                
                <button type="submit" className="btn btn-primary">SignUp</button>
            </form>
        </>
    );
    
}

export default Signup