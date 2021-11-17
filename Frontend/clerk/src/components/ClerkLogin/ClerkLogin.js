
import styles from "./ClerkLogin.module.scss"
import Logo from './assets/image/logo.png'
import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;





export default class ClerkLogin extends Component {

    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassoword = this.onChangePassoword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            username: '',
            password: '',
            clerk_token: '',
            passwordShown: false
        }
    }
    componentDidMount() {
    }
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }
    onChangePassoword(e) {
        this.setState({
            password: e.target.value
        });
    }

    //handle sign in
    
    onSubmit = (e) => {
        e.preventDefault();
        const clerk = {
            username: this.state.username,
            password: this.state.password,
        }
    
        const response = axios.post('http://localhost:3000/clerk/quan', clerk).then(
            (res) => {
                const token = res.data.token;
                const warning = res.data.msg;
                if (warning !== null && warning !== undefined) {
                    console.log("message is", warning);
                    swal({
                        title: "Please Try Again",
                        text: warning,
                        icon: "warning",
                        button: true,
                        // dangerMode: true,
                    })
                } else if (token) {
                    console.log("Signed in token Success block :", token);
                    swal({
                        title: "Successful",
                        text: "You have Logged In Successfully!",
                        icon: "success",
                        button: "Continue",
                        timer: 2000,
                    });
                    
                    const id = res.data.clerk.id;
                    const name = res.data.clerk.name;
                    const username = res.data.clerk.username;
                    const password = res.data.clerk.password;
                    const role = res.data.clerk.role;
                    const dateOfBirth = res.data.clerk.dateOfBirth;
                    const email = res.data.clerk.email;
                    const address = res.data.clerk.address;
                    const phoneNumber = res.data.clerk.phoneNumber;
                    const cccd = res.data.clerk.cccd;
                    const avatar = res.data.clerk.avatar;
                    
                    
                    //set user details in local storage
                    localStorage.setItem('clerk_token', token);
                    localStorage.setItem('id', id);
                    localStorage.setItem('name', name);
                    localStorage.setItem('username', username);
                    localStorage.setItem('password', password);
                    localStorage.setItem('role', role);
                    localStorage.setItem('dateOfBirth', dateOfBirth);
                    localStorage.setItem('email', email);
                    localStorage.setItem('address', address);
                    localStorage.setItem('phoneNumber', phoneNumber);
                    localStorage.setItem('cccd', cccd);
                    localStorage.setItem('avatar', avatar);

                    this.props.history.push('/DashBoard/');

                }
                //    alert('Successfuly Loged In')
            }
        ).catch((err) => {
            swal({
                title: "Please Try Again",
                text: "Error Occurred",
                icon: "error",
                // buttons: true,
                dangerMode: true,
            })
        });
    }
     

    render(){
       // const [passwordShown, setPasswordShown] = useState(false);
;
        const togglePasswordVisiblity = () => {
            //setPasswordShown(passwordShown ? false : true);
            if(this.state.passwordShown === true) this.setState({ passwordShown: false });
            else this.setState({ passwordShown: true });
          };

        
        return (
            
            <Router  forceRefresh={true}>
          <div>
              <div className={styles.Logo}> 
                  <img src={Logo} alt="QQQQ" />
               </div>
      
               <div className={styles.NhanVien}>
                  <>Nhân Viên</>
              </div>
      
              <div className={styles.DangNhap}>
                  <>Đăng Nhập</>
              </div>
      
              <div className={styles.HuongDan}>
                  <>Nhập username và mật khẩu vào bên dưới</>
              </div>
              <form onSubmit={this.onSubmit}>   
                  <div className={styles.username}>
                      <div className={styles.usernamelabel}>Username</div>
                      <input className={styles.usernametext} type="username" name="username" placeholder="Username"  onChange={this.onChangeUsername} value={this.state.username} />
                  </div>
      
                   <div className={styles.password}>
                      <div className={styles.passwordlabel}>Mật Khẩu</div>
                      <input className={styles.passwordtext}  type={this.state.passwordShown ? "text" : "password"} name="password" placeholder="Mật Khẩu" onChange={this.onChangePassoword} value={this.state.password} />
                      <i className={styles.unhideButton} onClick={togglePasswordVisiblity} >{eye}</i>
                   </div>
      
                  <div >
                   <button className={styles.LoginButton} type="submit">Log In</button>
                  </div>
              </form>
          </div>
          </Router>
          )
    }
    
}





