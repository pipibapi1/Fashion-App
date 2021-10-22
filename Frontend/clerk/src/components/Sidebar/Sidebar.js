import React from 'react'
import styles from './Sidebar.module.scss'
import Logo from './assets/image/logo.png'
import { Link, useLocation } from 'react-router-dom';

const sidebarNavLinks = ["Đơn Hàng", "Thông Tin Cá Nhân"]

function Sidebar() {

    const location = useLocation();
    return (
        <aside className={styles.Sidebar}>
            <div className={styles.SidebarContent}>
                        <div className={styles.Brand}>
                                <div className={styles.BrandImage}>
                                    <img src="" alt="La Fashionale" />
                                </div>
                        </div>
                        <nav className={styles.SideBarNav}>
                            <ul>
                                {sidebarNavLinks.map(sidebarNavLink => 
                                    
                                    <li className={styles.SideBarNavItem}>
                                    <Link className={
                                        location.pathname === '/${sidebarNavLink}' 
                                        ? styles.SidebarNavLinkActive
                                         : styles.SidebarNavLink
                                        } to={'/${sidebarNavLink}'} >
                                        {sidebarNavLink.charAt(0).toUpperCase() 
                                        + sidebarNavLink.slice(1)}
                                    </Link>
                                </li>
                                    
                                    )}
                                
                            </ul>
                        </nav>
            </div>
        </aside>
    )
}

export default Sidebar
