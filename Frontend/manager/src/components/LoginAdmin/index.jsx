import React from 'react'

const LoginAdmin = () => {
    return (
        <>
            <div className="modal-hoangkui modal-admin-login">
                <div className="modal-content-hoangkui modal-content-admin">
                    <h1 className="content-admin-name">LA FASHTION</h1>
                    <i className="fas fa-shopping-cart"></i>
                    <h3 className="content-admin-heading">Đăng nhập</h3>
                    <h5 className="content-admin-des">Nhập user và mật khẩu vào bên dưới</h5>
                    <div className="admin-container">
                        <label htmlFor="" className="admin-container-label">USERNAME</label>
                        <input type="text" className="admin-container-input" placeholder="Username"/>
                    </div>
                    <div className="admin-container">
                        <label htmlFor="" className="admin-container-label">MẬT KHẨU</label>
                        <input type="password" className="admin-container-input" placeholder="Mật khẩu" />
                    </div>
                <button className="admin-button">Đăng nhập</button>
                </div>
            </div>
        </>
    )
}

export default LoginAdmin
