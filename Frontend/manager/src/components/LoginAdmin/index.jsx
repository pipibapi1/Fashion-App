import React,{useState} from 'react'

const LoginAdmin = () => {
    const [user,setUser]=useState("")
    const [password,setPassWord]=useState("")
    // if (localStorage.getItem("modal-login")=="none"){
    //     document.querySelector(".modal-admin-login").style.display="none";

    // }
    const handleLogin=()=>{
        if((user==="admin" && password==="1234")){
            document.querySelector(".modal-admin-login").style.display="none";
            localStorage.setItem("modal-login","none")
        }
        else{
            alert("Liên hệ hoàng để lấy tài khoản, mật khẩu")
        }
        setUser("")
        setPassWord("")

    }
    return (
        <>
            <div className="modal-hoangkui modal-admin-login">
                <div className="modal-content-hoangkui modal-content-admin">
                    <h1 className="content-admin-name">La Fashionale</h1>
                    <i className="fas fa-shopping-cart"></i>
                    <h3 className="content-admin-heading">Đăng nhập</h3>
                    <h5 className="content-admin-des">Nhập user và mật khẩu vào bên dưới</h5>
                    <div className="admin-container">
                        <label htmlFor="" className="admin-container-label">USERNAME</label>
                        <input type="text" className="admin-container-input"
                        value={user}
                        onChange={(e)=>setUser(e.target.value)}
                        placeholder="Username"/>
                    </div>
                    <div className="admin-container">
                        <label htmlFor="" className="admin-container-label">MẬT KHẨU</label>
                        <input type="password" className="admin-container-input" 
                        value={password}
                        onChange={(e)=>setPassWord(e.target.value)}
                        placeholder="Mật khẩu" />
                    </div>
                <button
                onClick={handleLogin}
                className="admin-button">Đăng nhập</button>
                </div>
            </div>
        </>
    )
}

export default LoginAdmin
