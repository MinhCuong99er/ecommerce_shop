import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";
function Home() {
  
  return (
    <>
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        {/* Indicators */}
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to={0} className="active" />
          <li data-target="#myCarousel" data-slide-to={1} />
          <li data-target="#myCarousel" data-slide-to={2} />
        </ol>
        {/* Wrapper for slides */}
        <div className="carousel-inner">
          <div className="item active">
            <img src={process.env.PUBLIC_URL + "images/banner1.jpg"} alt="banner1" style={{width: '100%'}} />
          </div>
          <div className="item">
            <img src={process.env.PUBLIC_URL + "images/banner2.jpg"} alt="banner2" style={{width: '100%'}} />
          </div>
          <div className="item">
            <img src={process.env.PUBLIC_URL + "images/banner3.jpg"} alt="banner3" style={{width: '100%'}} />
          </div>
        </div>
        {/* Left and right controls */}
        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right" />
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="list-brand">
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-xs-2 nike"> <Link to="/" ><img src={process.env.PUBLIC_URL + "images/logo/logo-samsung.png"} alt="br1" /></Link></div>
            <div className="col-md-2 col-xs-2 jordan"> <Link to="/" ><img src={process.env.PUBLIC_URL + "images/logo/logo-acer.jpg"} alt="br2" /></Link></div>
            <div className="col-md-2 col-xs-2 palladium"> <Link to="/" ><img src={process.env.PUBLIC_URL + "images/logo/logo-dell.jpg"} alt="br3" /></Link></div>
            <div className="col-md-2 col-xs-2 adidas"> <Link to="/" ><img src={process.env.PUBLIC_URL + "images/logo/logo-intel.jpg"} alt="br4" /></Link></div>
            <div className="col-md-2 col-xs-2 converse"> <Link to="/" ><img src={process.env.PUBLIC_URL + "images/logo/logo-lenovo.png"} alt="br5" /></Link></div>
            <div className="col-md-2 col-xs-2 van"> <Link to="/" ><img src={process.env.PUBLIC_URL + "images/logo/logo-toshiba.png"} alt="br6" /></Link></div>
          </div>
        </div>
      </div>
      {/* <div className="list-product">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4" style={{cursor: 'pointer'}}>
              <div className="thumbnail">
                <img src={process.env.PUBLIC_URL + "images/logo/logo-samsung.png"} alt="..." className="product" />
              </div>
            </div>
            <div className="col-sm-6 col-md-4" style={{cursor: 'pointer'}}>
              <div className="thumbnail">
                <img src={process.env.PUBLIC_URL + "images/logo/logo-acer.jpg"} alt="..." className="product" />
              </div>
            </div>
            <div className="col-sm-6 col-md-4" style={{cursor: 'pointer'}}>
              <div className="thumbnail">
                <img src={process.env.PUBLIC_URL + "images/logo/logo-dell.jpg"} alt="..." className="product" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-4" style={{cursor: 'pointer'}}>
              <div className="thumbnail">
                <img src={process.env.PUBLIC_URL + "images/logo/logo-intel.jpg"} alt="..." className="product" />
              </div>
            </div>
            <div className="col-sm-6 col-md-4" style={{cursor: 'pointer'}}>
              <div className="thumbnail">
                <img src={process.env.PUBLIC_URL + "images/logo/logo-lenovo.png"} alt="..." className="product" />
              </div>
            </div>
            <div className="col-sm-6 col-md-4" style={{cursor: 'pointer'}}>
              <div className="thumbnail">
                <img src={process.env.PUBLIC_URL + "images/logo/logo-toshiba.png"} alt="..." className="product" />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Home;
