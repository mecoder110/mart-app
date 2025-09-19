import "./Signin.css"
function Signin({setIsLogin}) {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2> Sign-in Page</h2>
        <form className="login-form">
          <input type="text" placeholder="username" />
          <br />
          <br />
          <br />
          <input type="password" placeholder="password" />
          <br />
          <br />
          <button type="button" onClick={()=> setIsLogin(true)}>login</button>
        </form>
      </div>
    </div>
  );
}

export default Signin;
