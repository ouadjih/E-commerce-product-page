import React, { useState } from 'react'
import './Navbar.css'
import profile from '../asset/images/image-avatar.png'
import cart from '../asset/images/icon-cart.svg'
import product from '../asset/images/image-product-1-thumbnail.jpg'
import menuImage from '../asset/images/icon-menu.svg';
import closeImage from '../asset/images/icon-close.svg';
import deleteimg from '../asset/images/icon-delete.svg'
import { NavbarMobile } from './NavbarMobile'
export const Navbar = () => {

    const[card,setCard]=useState(false);
    const[menu,setMenu]=useState(false);

    function toggleCard(){
        setCard(!card)
    }
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img  onClick={ ()=>setMenu(!menu)} className="menu" src={menu?closeImage:menuImage} alt="menu"/>
        <h1 className="logo">sneakers</h1>
        <ul className="links">
          <li className="link">Collections</li>
          <li className="link">Men</li>
          <li className="link">Women</li>
          <li className="link">About</li>
          <li className="link">Contact</li>
        </ul>
        {menu && 
        <NavbarMobile/>
        }
        
        
      </div>
      <div className="nav-right">
        <img
          src={cart}
          alt="icon-payement"
          className="icon"
        />
        <img
          src={profile}
          alt="profile"
          className="profile"
          onClick={toggleCard}
        />
      </div>
      {card && <div className='cart'>
        <h2 className="cart-title">cart</h2>
        <div className="cart-product">
          <img
            className="item-image"
            src={product}
            alt="product-img"
          />
          <div className="product-info">
          <div className="product-title">Fall Limited Edition Sneakers</div>
          <div className="pricing">
            <div className="product-price">$125.00</div>
            <div className="product-q">x  3</div>
            <div className="product-total-price">$375.00</div>
          </div>
          </div>
          <img
            className="delete-product"
            src={deleteimg}
            alt="delete"
          />
        </div>
        <div className="btn-checkout">Checkout</div>
      </div>}
    </nav>
  )
}
