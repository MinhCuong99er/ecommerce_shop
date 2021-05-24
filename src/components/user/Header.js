import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../../css/Header.css";
function Header() {
  
  return (
    <>
        <div className="top-bar">
            <div className="container">
                <div className="row" >
                    <div className="logo col-sm-6 clearfix">
                            <NavLink activeClassName="active-link" className="nav-Navlink p-0" to="/">
                                <img src={process.env.PUBLIC_URL + "images/logo/logo-website.png"} alt="logo" />
                            </NavLink>
                        {/* <a href="#" className="logo" style={{float: "left"}}></a> */}
                    </div>
                    <div className="col-sm-6 clearfix">
                        <div className="row" style={{marginTop: '2%', marginBottom: '2%'}}>
                            <span className="float-right">
                                <NavLink activeClassName="active-link" className="nav-Navlink p-0" to="/user/login">
                                    Login
                                </NavLink> / 
                                <NavLink activeClassName="active-link" className="nav-Navlink p-0" to="/user/register">
                                    Register
                                </NavLink>
                            </span>
                        </div>
                        <div className="row">
                            <div className="col-md-8 col-xs-8" style={{paddingRight: 0, paddingLeft: 0}}>
                                <div className="search clearfix">
                                    <input type="search" id="search" placeholder="Enter your search here" />
                                    <button className="icon"><i className="fa fa-search float-right" /></button>
                                </div>
                            </div>
                                <div className="col-md-4 col-xs-4" style={{paddingRight: 0, paddingLeft: 0}}>
                                <div className="cart clearfix">
                                    <span className="cart-text">0 ITEMS</span>
                                    <span className="float-right"><Link to="/cart" className="fa fa-shopping-cart" /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="main-menu">
            <div className="container">
                <nav className="navbar navbar-inverse">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />                        
                        </button>
                        <a href="#" className="navbar-brand"><img src={process.env.PUBLIC_URL + "images/logo/logo-website.png"} alt="logo" /></a>
                    </div>
                    <div className="navbar-collapse collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li className="dropdown" >
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#">LAPTOP
                                    <i className="fa fa-angle-double-down" />
                                    <i className="fa fa-angle-double-up" />
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link to="#" className="samsung">Samsung</Link></li>
                                    <li><Link to="#" className="acer">Acer</Link></li>
                                    <li><Link to="#" className="dell">Dell</Link></li>
                                    <li><Link to="#" className="intel">Intel</Link></li>
                                    <li><Link to="#" className="lenovo">Lenovo</Link></li>
                                    <li><Link to="#" className="toshiba">Toshiba</Link></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#">ĐIỆN THOẠI
                                    <i className="fa fa-angle-double-down" />
                                    <i className="fa fa-angle-double-up" />
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link to="#" className="samsung">Samsung</Link></li>
                                    <li><Link to="#" className="acer">Acer</Link></li>
                                    <li><Link to="#" className="dell">Dell</Link></li>
                                    <li><Link to="#" className="intel">Intel</Link></li>
                                    <li><Link to="#" className="lenovo">Lenovo</Link></li>
                                    <li><Link to="#" className="toshiba">Toshiba</Link></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#">PHỤ KIỆN 
                                    <i className="fa fa-angle-double-down" />
                                    <i className="fa fa-angle-double-up" />
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link to="#" className="samsung">Samsung</Link></li>
                                    <li><Link to="#" className="acer">Acer</Link></li>
                                    <li><Link to="#" className="dell">Dell</Link></li>
                                    <li><Link to="#" className="intel">Intel</Link></li>
                                    <li><Link to="#" className="lenovo">Lenovo</Link></li>
                                    <li><Link to="#" className="toshiba">Toshiba</Link></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#">THIẾT BỊ SỐ 
                                    <i className="fa fa-angle-double-down" />
                                    <i className="fa fa-angle-double-up" />
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link to="#" className="samsung">Samsung</Link></li>
                                    <li><Link to="#" className="acer">Acer</Link></li>
                                    <li><Link to="#" className="dell">Dell</Link></li>
                                    <li><Link to="#" className="intel">Intel</Link></li>
                                    <li><Link to="#" className="lenovo">Lenovo</Link></li>
                                    <li><Link to="#" className="toshiba">Toshiba</Link></li>
                                </ul>
                            </li>
                            <li><Link to="#" className="sale">FLASH SALE</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </>
  );
}

export default Header;
