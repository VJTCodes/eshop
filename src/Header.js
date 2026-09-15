import React from "react";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StoreFrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{basket},dispatch] = useStateValue();
    return (
         <div className="header">
          <Link to="/" style={{textDecoration:"none"}}>
      <div className="header__logo">
        <StoreFrontIcon className="header__logoImage" fontSize='large'></StoreFrontIcon>
        <h2 className='header__logoTitle'>eShop</h2>
      </div>
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className='header__searchIcon' ></SearchIcon>
      </div>
      <div className="header__nav">
        <Link to="/login" style={{textDecoration:"none"}}>
        <div className="nav__item">
          <span className="nav__itemLineOne">Hello Guest</span>
          <span className="nnav__itemLineTwo">Sign In</span>
        </div>
        </Link>
          <div className="nav__item">
          <span className="nav__itemLineOne">your</span>
          <span className="nav__itemLineTwo">shop</span>
        </div>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="nav__itemBasket">
            <ShoppingBasketIcon />
            <span className="nav__itemLineTwo nav__BasketCount">{basket.length}</span>
          </div>
        </Link>
          
      </div>

      
    </div>
    )
}

export default Header