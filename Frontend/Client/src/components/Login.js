import React,{useState} from 'react'
export default function Login(){
    const [loginState,setLogin]=useState(0)
    return(
        <div className="Page">
        <img src="images/loader.gif" className="loader" alt=""/>
    
        <div className="alert-box">
            <img src="images/error.png" className="alert-img" alt=""/>
            <p className="alert-msg">Error message</p>
        </div>

        <div className="signup">
            <span className="or">Or</span>
            <div className="left">
                {loginState===0?
                <form> 
                    <div className="form-inner">
                        <div className="form-group">
                            <label for="">Email address</label>
                            <input type="text" placeholder="Enter your email address" id="email" />
                        </div>
                        <div className="form-group">
                            <label for="">Password</label>
                            <input type="password" placeholder="Enter your password" id="password" />
                        </div>
                    </div>
                    <p className="remember"><input type="checkbox" /> <span>Remember me</span></p>
                    <p className="member"> New user? <a onClick={()=>setLogin(1)}>Create an account</a></p>
                    <button className="submit-btn1">Log in</button>
                </form>:""
                }
                {loginState===1?
                <form>
                <div class="form-inner">
                <div class="form-group">
                    <label for="">Name</label>
                    <input type="text" placeholder="Enter your name" autocomplete="off" id="name" />
                </div>
                <div class="form-group">
                    <label for="">Phone</label>
                    <input type="text" placeholder="Enter your phone" autocomplete="off" id="number" />
                </div>
                <div class="form-group">
                    <label for="">Email address</label>
                    <input type="email" placeholder="Enter your email" autocomplete="off" id="email" />
                </div>
                <div class="form-group">
                    <label for="">Password</label>
                    <input type="password" placeholder="Create your password" autocomplete="off" id="password" />
                </div>
                </div>
                <p class="remember">
                    <input type="checkbox" /> <span>Remember me</span>
                </p>
                <p class="member"> Are you a member ? <a onClick={()=>setLogin(0)}>Login now</a></p>
                    <button class="submit-btn">Create an account</button>
                </form>:""
                }
            </div>
            <div className="right">
              <ul>
                <li className="facebook">
                  <a href="#">
                  <i className="fas fa-user" aria-hidden="true"></i>
                    <span>Connect with facebook</span>
                  </a>
                </li>
                <li className="twitter">
                  <a href="#">
                  <i className="fas fa-user" aria-hidden="true"></i>
                    <span>Connect with twitter</span>
                  </a>
                </li>
                <li className="google">
                  <a href="#">
                    <i className="fas fa-user" aria-hidden="true"></i>
                    <span>Connect with google</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    
        )
}