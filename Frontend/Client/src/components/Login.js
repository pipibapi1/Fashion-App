import React,{useState} from 'react'
import axios from 'axios';
export default function Login(){
    const [loginState,setLogin]=useState(0)
    const [loginEmail, setEmail] = useState("");
    const [loginPW, setPw] = useState("");
    const [loginName, set1] = useState("");
    const [loginPhone, set2] = useState("");
    const [loginEmail2, set3] = useState("");
    const [loginPW2, set4] = useState("");
    const [loginEuser, set5] = useState("");
    const [loginAddress,set6] = useState("");
    const [loginBirthday,set7] = useState("");
    function handleSubmit() {
      const client = {
        username: loginEmail,
        password: loginPW,
      }
      const response = axios.post('http://localhost:3000/Customer', client).then(
        (res) => {
            const token = res.data.token;
            const warning = res.data.msg;
            if (warning !== null && warning !== undefined) {
                alert(warning);
            } else if (token) {
                console.log("Signed in token Success block :", token);
            
                const id = res.data.Customer.id;
                const name = res.data.Customer.name;
                const username = res.data.Customer.username;
                const password = res.data.Customer.password;
                
                //set user details in local storage
                sessionStorage.setItem('id', id);
                sessionStorage.setItem('name', name);
                sessionStorage.setItem('username', username);
                sessionStorage.setItem('password', password);
                window.location = "/";
            }
        }
    ).catch((err) => {
      alert("Error");
      })
    }
    function handleSubmit2(event) {
      const client = {
        name: loginName,
        password: loginPW2,
        email: loginEmail2,
        phone: loginPhone,
        Euser: loginEuser,
        Address: loginAddress,
        Bday: loginBirthday 
      }

      const response = axios.post('http://localhost:3000/Customer/create', client).then(
        (res) => {
            const token = res.data.token;
            const warning = res.data.msg;
            if (warning !== null && warning !== undefined) {
                alert(warning);
            } else if (token) {
            
                const id = res.data.Customer.id;
                const name = res.data.Customer.name;
                const username = res.data.Customer.username;
                const password = res.data.Customer.password;
                //set user details in local storage
                sessionStorage.setItem('id', id);
                sessionStorage.setItem('name', name);
                sessionStorage.setItem('username', username);
                sessionStorage.setItem('password', password);
                window.location = "/";
            }
        }
    ).catch((err) => {
      console.log(err)
      })
    }
    function onChangeUsername(event){
      setEmail(event.target.value);
    }
    function onChangePW(event){
      setPw(event.target.value);
    }
    function onChange1(event){
      set1(event.target.value);
    }
    function onChange7(event){
      set7(event.target.value);
    }
    function onChange6(event){
      set6(event.target.value);
    }
    function onChange2(event){
      set2(event.target.value);
    }
    function onChange3(event){
      set3(event.target.value);
    }
    function onChange4(event){
      set4(event.target.value);
    }
    function onChange5(event){
      set5(event.target.value);
    }
    return(
        <div className="Page">
        <img src="images/loader.gif" className="loader" alt=""/>
    
        <div className="alert-box">
            <img src="images/error.png" className="alert-img" alt=""/>
            <p className="alert-msg">Error message</p>
        </div>

        <div className="signup">
            <span className="or">Or</span>
            <div className="left1">
                {loginState===0?
                <div>
                <form> 
                    <div className="form-inner">
                        <div className="form-group">
                            {/* <label for="">Email address</label> */}
                            <input type="text" className="INPUS" placeholder="Enter your Username" onChange={onChangeUsername} name="email" />
                        </div>
                        <div className="form-group">
                            {/* <label for="">Password</label> */}
                            <input type="password" placeholder="Enter your password" onChange={onChangePW} name="password" />
                        </div>
                    </div>
                    <p className="remember"><input type="checkbox" /> <span>Remember me</span></p>
                    <p className="member"> New user? <a onClick={()=>setLogin(1)}>Create an account</a></p>
                </form> <button className="submit-btn1" onClick={()=>handleSubmit()}>Log in</button> </div>:""
                }
                {loginState===1?<div>
                <form>
                <div class="form-inner">
                <div class="form-group">
                    <label for="">Name</label>
                    <input type="text" className="INPUS" placeholder="Enter your name" autocomplete="off" name="name" onChange={onChange1}/>
                </div>
                <div class="form-group">
                    <label for="">Phone</label>
                    <input type="text" className="INPUS" placeholder="Enter your phone" autocomplete="off" name="number" onChange={onChange2}/>
                </div>
                <div class="form-group">
                    <label for="">Email address</label>
                    <input type="email" className="INPUS" placeholder="Enter your email" autocomplete="off" name="email"  onChange={onChange3}/>
                </div>
                <div class="form-group">
                    <label for="">Password</label>
                    <input type="password" className="INPUS" placeholder="Create your password" autocomplete="off" name="password"  onChange={onChange4}/>
                </div>
                </div>
                <div class="form-group">
                    <label for="">Username</label>
                    <input type="username" className="INPUS" placeholder="Create your username" autocomplete="off" name="username"  onChange={onChange5}/>
                </div>
                <div class="form-group">
                    <label for="">Address</label>
                    <input type="Address" className="INPUS" placeholder="Write your Address" autocomplete="off" name="Address"  onChange={onChange6}/>
                </div>
                <div class="form-group">
                    <label for="">Birthday</label>
                    <input type="date" className="INPUS" placeholder="Write your Birthday" autocomplete="off" name="Birthday"  onChange={onChange7}/>
                </div>
                <p class="remember">
                    <input type="checkbox" /> <span>Remember me</span>
                </p>
                <p class="member"> Are you a member ? <a onClick={()=>setLogin(0)}>Login now</a></p>
                </form><button class="submit-btn" onClick={()=>handleSubmit2()}>Create an account</button></div>:""
                }
            </div>
            <div className="right">
              <ul>
                <li className="facebook">
                  <a href="#" onClick={()=>alert(loginEmail)}>
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