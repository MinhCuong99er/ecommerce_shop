import React from "react";
import { NavLink, Link } from "react-router-dom";
function Header() {
  
  return (
    <>
      <div className="table-product">
        <div className="container">
          <div className="row">
            <div className="table-responsive">
              <table className="table table-hover table-bordered">
                <thead>
                  <tr>
                    <th width="10%">ID</th>
                    <th width="25%">IMAGE</th>
                    <th width="20%">PRODUCT NAME</th>
                    <th width="15%">COLOR</th>
                    <th width="10%">COMBO</th>
                    <th width="10%">AMOUNT</th>
                    <th width="20%">SUM</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <img src={process.env.PUBLIC_URL + "images/kinhcuongluc.jpg"} style={{display: 'block', width: '200px', height: '200px'}} />
                    </td>
                    <td>
                      <h4>
                        Kính Cường Lực Vsmart Live<br />
                      </h4>
                      <p>ID: 134</p>
                    </td>
                    <td>White</td>
                    <td>3 KÍNH</td>
                    <td>
                      <select name id="so-luong" className="form-control">
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                      </select>
                    </td>
                    <td className="sum-money">110</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="left">
              <div className="col-xs-12 col-sm-3 ">
                  <button type="button" className="btn btn-success btn-block"><Link to="/"/>Continue shopping</button>
              </div>
            </div>
            <div className="right" align="right">
              <div className="col-xs-12 col-sm-3 col-sm-offset-6">
                <button type="button" className="btn btn-danger btn-block"><Link to="/checkout"/>Check Out</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
