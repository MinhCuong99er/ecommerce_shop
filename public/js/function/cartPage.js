$(document).ready(function () {
    $("#so-luong").change(function () {
        var so_luong = $(this).val();
        var sum= parseInt(so_luong)*110;
        $('.sum-money').text(sum);
    });
    $(".btn-click-go-to-home").click(function () {
        window.location='index.html';
    });
    $(".btn-click-checkout").click(function () {
        window.location='checkoutPage.html';
    });
});