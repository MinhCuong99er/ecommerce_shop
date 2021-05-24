import React from "react";
import "../../css/Footer.css";
function footer() {
  
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <a className="hd" href>HỖ TRỢ KHÁCH HÀNG</a>
              <a href>Các câu hỏi thường gặp</a>
              <a href>Gửi yêu cầu hỗ trợ</a>
              <a href>Hướng dẫn đặt hàng</a>
              <a href>Phương thức vận chuyển</a>
            </div>
            <div className="col-md-3">
              <a className="hd" href>Về chúng tôi</a>
              <a href>Điều khoản sử dụng</a>
              <a href>Chính sách bảo mật thông tin</a>
              <a href>Chính sách bảo mật thanh toán</a>
              <a href>Quy chế hoạt động</a>
              <a href></a>
            </div>
            <div className="col-md-3">
              <a className="hd" href>HỢP TÁC VÀ LIÊN KẾT</a>
              <a href>Quy chế hoạt động Sàn GDTMĐT</a>
              <a href>Cơ chế giải quyết tranh chấp</a>
            </div>
            <div className="col-md-3">
              <a className="hd" href>Phương thức thanh toán</a>
              <div className="row" style={{marginTop: '5%'}}>
                <div className="col-md-4 col-xs-4">
                  <img src={process.env.PUBLIC_URL + "images/pay-paypal.png"} alt="" style={{border: '1px solid black'}} />
                </div>
                <div className="col-md-4 col-xs-4">
                  <img src={process.env.PUBLIC_URL + "images/pay-visa.png"} alt="" style={{border: '1px solid black'}} />
                </div>
                <div className="col-md-4 col-xs-4">
                  <img src={process.env.PUBLIC_URL + "images/pay-mastercard.png"} alt="" style={{border: '1px solid black'}} />
                </div>
              </div>
              <div className="row" style={{marginTop: '5%'}}>
                <div className="col-md-4 col-xs-4">
                  <img src={process.env.PUBLIC_URL + "images/pay-money-home.svg"} alt="" style={{border: '1px solid black'}} />
                </div>
                <div className="col-md-4 col-xs-4">
                  <img src={process.env.PUBLIC_URL + "images/pay-internet-banking.svg"} alt="" style={{border: '1px solid black'}} />
                </div>
                <div className="col-md-4 col-xs-4">
                  <img src={process.env.PUBLIC_URL + "images/pay-installment.svg"} alt="" style={{border: '1px solid black'}} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default footer;
