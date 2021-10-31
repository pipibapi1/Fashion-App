import React,{useState} from 'react'

function Login(props) {
    return (props.trigger)?(
        <form className="Popup">
            <div className="buttom">
            <h3>Login Form</h3>
            <div className="inputBox">
                <input type="text" placeholder="your name"></input><p>{' '} </p>
                <input type="email" placeholder="your email"></input>
            </div>
            <div class="remember">
            <input type="checkbox" name="" id="remember-me"/>
            <label for="remember-me">remember me</label>
          </div>
          <input type="submit" value="login now" class="header__menu-link btn btn--border btn--rounded buttom" onClick={()=>props.setTrigger(false)}/>
          <p>forget password?<a href="#">click here</a></p>
          <p>don't have an account?<a href="#">create one?</a></p>
          </div>
        </form>
    ):"";
  }

function Icons() {
    var [openPopup, setButtonPopup]=useState(false)
    return (
    <div>
    <div className="icons">
        <div id="menu-btn" className="fas fa-bars"></div>
        <div id="search-btn" className="fas fa-search"></div>
        <div id="cart-btn" className="fas fa-shopping-cart"></div>
        <div id="login-btn" onClick={()=>setButtonPopup(true)} className="fas fa-user"></div>
    </div>
    <Login trigger={openPopup} setTrigger={setButtonPopup}></Login>
    </div>
    
    )
}

export default Icons