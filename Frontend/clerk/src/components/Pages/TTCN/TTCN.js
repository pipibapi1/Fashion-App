import React, { Component } from 'react'
import styles from "./TTCN.module.scss"

import axios from 'axios';
import swal from 'sweetalert';
import DatePicker from  'react-datepicker';



    const name = localStorage.getItem('name');
    const role = localStorage.getItem('role');
    const ID = localStorage.getItem('id');

    

    export default class TTCN extends Component {
    
        constructor(props) {
            super(props);
            this.onChangeEmail= this.onChangeEmail.bind(this);
            this.onChangeAddress = this.onChangeAddress.bind(this);
            this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
            this.onChangeCccd = this.onChangeCccd.bind(this);
            this.onChangeBirthDay = this.onChangeBirthDay.bind(this);
            this.onChangeAva = this.onChangeAva.bind(this);
    
            this.onSubmit = this.onSubmit.bind(this);
            this.state = {
                email: localStorage.getItem('email'),
                address: localStorage.getItem('address'),
                phoneNumber:localStorage.getItem('phoneNumber'),
                cccd: localStorage.getItem('cccd'),
                birthday : new Date(localStorage.getItem('dateOfBirth')),
                avatar : localStorage.getItem('avatar'),
                file : null,
                clerk_token: '',
            }
        }
        onChangeEmail(e) {
            this.setState({
                email: e.target.value
            });
        }
        onChangeAddress(e) {
            this.setState({
                address: e.target.value
            });
        }
        onChangePhoneNumber(e) {
            this.setState({
                phoneNumber: e.target.value
            });
        }
        onChangeCccd(e) {
            this.setState({
                cccd: e.target.value
            });
        }
        onChangeBirthDay(date){
            this.setState({
                birthday: date
            });
        }
       
        onChangeAva(e)
        {
            this.setState({
                file : e.target.files[0]
            })
            if(e.target.files[0]){
                    const fileReader = new FileReader();
                    fileReader.readAsDataURL(e.target.files[0]);
    
                    fileReader.onload = () => {
                        this.setState({
                            avatar : fileReader.result
                        })
                    };
                    fileReader.onerror = (error) => {
                        console.log(error);
                    }    
            }
        }
        

        //handle update
        onSubmit = (e) => {
            e.preventDefault();
            
            {/*const update = {
                email: this.state.email,
                address: this.state.address,
                phoneNumber: this.state.phoneNumber,
                cccd: this.state.cccd,
                birthday: this.state.birthday,
                
                id: ID
            }*/}
          
            
            const update = new FormData();
            update.append('email', this.state.email);
            update.append('address', this.state.address);
            update.append('phoneNumber', this.state.phoneNumber);
            update.append('cccd', this.state.cccd);
            update.append('birthday',  this.state.birthday);
            update.append('id', ID);
            update.append('file', this.state.file);
            update.append('avatar', this.state.avatar);
            
            const response = axios.post('http://localhost:3000/clerk/update-router', update).then(
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
                            text: "You have Updated Successfully!",
                            icon: "success",
                            button: "Continue",
                            timer: 2000,
                        });
                        
                        const id = res.data.newClerk.id;
                        const name = res.data.newClerk.name;
                        const username = res.data.newClerk.username;
                        const password = res.data.newClerk.password;
                        const role = res.data.newClerk.role;
                        const dateOfBirth = res.data.newClerk.dateOfBirth;
                        const email = res.data.newClerk.email;
                        const address = res.data.newClerk.address;
                        const phoneNumber = res.data.newClerk.phoneNumber;
                        const cccd = res.data.newClerk.cccd;
                        const avatar = res.data.newClerk.avatar;
                        
                        
    
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
    
                        this.setState({
                            email : email,
                            address : address,
                            phoneNumber : phoneNumber,
                            cccd : cccd,
                            birthday : new Date(dateOfBirth),
                            avatar : avatar
                        })
    
                    }
                    //    alert('Successfuly Loged In')
                }
            ).catch((err) => {
                swal({
                    title: "Please Try Againaaaa",
                    text: "Error Occurred : " + err,
                    icon: "error",
                    // buttons: true,
                    dangerMode: true,
                })
            });
        }
    
    render (){
        return(
        <div className={styles.ThongTinCaNhan}>
            <div className={styles.label}>Thông Tin Cá Nhân</div>
            <div className={styles.name}>{name}</div>
            <div >
                    <img  className={styles.ava} src={this.state.avatar}alt="Ava" />
                </div>
            <div id="rectangle" className={styles.outerBox}>
            
            <div id="rectangle" className={styles.innerBox}>

            
                <div className={styles.bigName}>{name}</div>

                <div className={styles.hardIfoBar1}>Chức Vụ</div>
                 <div className={styles.hardfInfo1}>{role}</div>
                <div className={styles.hardIfoBar2}>ID</div>
                <div className={styles.hardfInfo2}>{ID}</div>
            
            <form onSubmit={this.onSubmit}>
                
                <div>
                    <img className={styles.BigAva}  src={this.state.avatar} alt="Ava" />
                    
                </div>
                <div className={styles.submitAva}>
                    <div className='custom-file'>
                        <input type='file' className='custom-file-input' id='customFile' onChange={this.onChangeAva}/>
                    </div>
                </div>
                <div className={styles.birthdayBar}>Ngày Sinh</div>
                    <div className={styles.birthdayPicker}>
                       <DatePicker 
                            dateFormat = "dd/MM/yyyy"
                            showYearDropdown
                            Id='birthday'
                            selected={this.state.birthday}
                            onChange={this.onChangeBirthDay} 
                       />
                    </div>
                <div className={styles.emailBar}>Email</div>
                    <input className={styles.emailText} type='text' Id='email'  onChange={this.onChangeEmail} value={this.state.email}/>
                <div className={styles.addressBar}>Địa Chỉ</div>
                    <input className={styles.addressText} type='text' Id='address'  onChange={this.onChangeAddress} value={this.state.address} />
                <div className={styles.phoneNumberBar}>Số Điện Thoại</div>
                     <input className={styles.phoneNumberText} type='text' Id='phoneNumber'  onChange={this.onChangePhoneNumber} value={this.state.phoneNumber}/>
                <div className={styles.cccdBar}>CMND/CCCD</div>
                    <input className={styles.cccdText} type='text' Id='cccd'  onChange={this.onChangeCccd} value={this.state.cccd}/>
                <button className={styles.updateButton} type="submit">Cập nhật</button>

            </form>


                </div>

            </div>
        </div>
        )
    }
}


