import React from 'react'
import styles from './Sidebar.module.scss'
import Logo from './assets/image/logo.png'
import logout from './assets/image/logout.PNG'
import DonHang from './assets/image/DonHang.PNG'
import TTCN from './assets/image/TTCN.PNG'
import { Link, useLocation } from 'react-router-dom';
import { useHistory } from "react-router-dom";


const SidebarNavLinks = ["Đơn Hàng", "Thông Tin Cá Nhân"]

function Sidebar() {
    const location = useLocation();

    let history = useHistory();

    const justLogout = () => {
        alert("GOOD BYE");
        localStorage.clear();
        history.push("/");
    }
  
    return (
        <aside className={styles.Sidebar}>
            <div className={styles.SidebarContent}>
                       <div className={styles.Brand}>
                                <div className={styles.BrandImage}>
                                    <img src={Logo} alt="La Fashionale" />
                                      
                                </div>
                                <div className={styles.BrandName}>
                                        <h2>  La Fashionale</h2>
                                    </div>
                        </div>
                        <nav className={styles.SideBarNav}>
                            <ul>
                                {SidebarNavLinks.map((SidebarNavLink, key) => (
                                    
                                    <li className={styles.SideBarNavItem} key={key}>
                                    <Link className={
                                        location.pathname === `/${SidebarNavLink}`
                                        ? styles.SidebarNavLinkActive
                                         : styles.SidebarNavLink
                                        }
                                         to={`/${SidebarNavLink}`} 
                                         >
                                        {SidebarNavLink.charAt(0).toUpperCase() 
                                        + SidebarNavLink.slice(1)}
                                    </Link>
                                </li>
                                    
                                 ) )}
                                
                            </ul>
                        </nav>
                        <div className={styles.DonHangImage}>
                            <img src={DonHang} alt="donhang" />
                        </div>
                        <div className={styles.TTCNImage}>
                            <img src={TTCN} alt="ttcn" />
                        </div>
                        
  
            </div>
        </aside>
    )
}

export default Sidebar
