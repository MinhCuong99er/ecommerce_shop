//  xử lý việc đăng nhập đăng xuất : khi click vào  nút đăng nhập -> chuyển đến trang đăng nhập. đăng kí
$(document).ready(function () {
    $("#btn-login").click(function () {
        window.location  = "loginPage.html";
    });
    // khi click vào một trong các sản phẩm thì chuyển sang trang sản phẩm
    // khi clikc vào xem chi tiết tại trang chủ --> chuyển đến trang xem chi tiêtas
    $('.btn-add-cart').click(function (){
        window.location  = "cartPage.html";
    });
    $(".btn-click-xem-chi-tiet").click(function () {
        window.location  = "productDetails.html";
    });
    $(".product").click(function () {
        window.location  = "productList.html";
    });
    $(".sale").click(function () {
        window.location  = "salePage.html";
    });
    $(".new-arrival").click(function () {
        window.location  = "newarrivalPage.html";
    });
    $(".btn-guess-checkout").click(function () {
        window.location  = "shippingpaymentPage.html";
    });
    // click vào logo quay tro ve trang chu
    $(".logo").click(function (){
        window.location= 'index.html';
    });
});


