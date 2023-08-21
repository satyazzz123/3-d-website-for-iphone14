import React from 'react';
import logo from "../assets/images/logo.svg"
import search from  "../assets/images/search.svg";
import store from  "../assets/images/store.svg";
export default function Nav() {
  return (
   
      
    <nav className='nav-wrapper'>
        <div className="nav-content">
        <ul className="list-styled">
            <li className='list-styled'>
                <img src={logo} alt="phone" />
            </li>
            <li>
                <a  className="link-styled"> Store</a>
            </li>
            <li>
                <a  className="link-styled"> Store</a>
            </li>
            <li>
                <a  className="link-styled"> Store</a>
            </li>
            <li>
                <a  className="link-styled"> Store</a>
            </li>
            <li>
                <a  className="link-styled"> Store</a>
            </li>
            <li>
               <img src={search} alt="" />
            </li>
            <li>
                <img src={store} alt="" />
            </li>
        </ul>
        </div>
       

    </nav>

   
  )
}
