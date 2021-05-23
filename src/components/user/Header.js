import React from "react";
import "../../css/Header.css";
function Header() {
  
  return (
    <>
        <div className="top-bar">
            <div className="container">
                <div className="row" >
                    <div className="logo col-sm-6 clearfix">
                        <a href="#" className="logo" style={{float: "left"}}><img src="images/logo.png" alt="logo" /></a>
                    </div>
                    <div className="col-sm-6 clearfix">
                        <div className="row" style={{marginTop: '2%', marginBottom: '2%'}}>
                            <span className="float-right" id="btn-login">Login / Register</span>
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
                                    <span className="float-right"><a href="#" className="fa fa-shopping-cart" /></span>
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
                        <a href="#" className="navbar-brand"><img src="images/logo.png" alt="logo" /></a>
                    </div>
                    <div className="navbar-collapse collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li className="dropdown" id="f">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#">GAMING 
                                    <i className="fa fa-angle-double-down" />
                                    <i className="fa fa-angle-double-up" />
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a href="#" className="adidas">Adidas</a></li>
                                    <li><a href="#" className="van">Van</a></li>
                                    <li><a href="#" className="converse">Converse</a></li>
                                    <li><a href="#" className="nike">Nike</a></li>
                                    <li><a href="#" className="palladium">Palladium</a></li>
                                    <li><a href="#" className="jordan">Jordan</a></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#">PHỤ KIỆN LAPTOP
                                    <i className="fa fa-angle-double-down" />
                                    <i className="fa fa-angle-double-up" />
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a href="#" className="adidas">Adidas</a></li>
                                    <li><a href="#" className="van">Van</a></li>
                                    <li><a href="#" className="converse">Converse</a></li>
                                    <li><a href="#" className="nike">Nike</a></li>
                                    <li><a href="#" className="palladium">Palladium</a></li>
                                    <li><a href="#" className="jordan">Jordan</a></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#">PHẦN CỨNG 
                                    <i className="fa fa-angle-double-down" />
                                    <i className="fa fa-angle-double-up" />
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a href="#" className="adidas">Adidas</a></li>
                                    <li><a href="#" className="van">Van</a></li>
                                    <li><a href="#" className="converse">Converse</a></li>
                                    <li><a href="#" className="nike">Nike</a></li>
                                    <li><a href="#" className="palladium">Palladium</a></li>
                                    <li><a href="#" className="jordan">Jordan</a></li>
                                </ul>
                            </li>
                            <li><a href="#" className="new-arrival">NEW ARRIVAL</a></li>
                            <li><a href="#" className="sale">SALE</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </>
  );
}

export default Header;
