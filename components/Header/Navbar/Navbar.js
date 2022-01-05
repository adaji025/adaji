import React, { useState } from "react";
import { FaTimes, FaList } from "react-icons/fa";
import { MenuItems } from "../MenuItems";
import styles from './Navbar.module.css'

export default function Navbar() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked)
    }
  return (
    <div>
      <nav className={`fixed-top ${styles.navItems}`}>
        {/* <h1 className={` ${styles.nav_logo}`}>
           <span  style={{ 'width': "10px", 'margin-right': '5px' }}>Adaji</span>
          <span className="">
            <svg style={{ 'width': "10px", 'maginLeft': '15px' }}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
          </span>
        </h1> */}
        <div className={`${styles.menu_icon}`} onClick={handleClick}>
         {clicked ? <FaTimes /> : <FaList />}
        </div>
        <ul className={clicked ? 'nav_menu active' : 'nav_menu'}>
                {
                    MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href={item.url} className={`gt-regular ${styles.nav_links}`}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
      </nav>
    </div>
  );
}
