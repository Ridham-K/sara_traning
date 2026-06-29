function Login(){
    return(
        <>
            <div className="form-card">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Enter your email" id="email"></input>
                <button className="submit-btn">Login</button>
            </div>
        </>
    )
}

export default Login;