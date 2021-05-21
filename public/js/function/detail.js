// xử lý sự kiện trang xem chi tiết sản phẩm thông tin sản phẩm
$(document).ready(function () {

    // sự kiện carosul
    $("#carousel-image-product").carousel('pause');
    // khi di  chuyển chuột vào các ô của  hinh ảnh chi tiết
    $('.box-detail').mouseenter(function () {
        $(this).css('border','1px solid');
        var src = $(this).find('img').attr('src');
        // thay thể
        $(this).parent().parent().find('.img-top-change').attr('src',src);
    });
    $('.box-detail').mouseleave(function () {
        $(this).css('border','none');
    });
    $('.box-detail').click(function () {
        $(this).css('border','1px solid');
        var src = $(this).find('img').attr('src');
        // thay thể
        $(this).parent().parent().find('.img-top-change').attr('src',src);
    });


    // xự kiện khi click vào các nút chọn size
    var arr_size_s = [29,30,31,32,33,34,35,36,37,38];
    var arr_size_m = [38,39,40,41,42,43,44,45,46,47];
    var arr_size_l = [48,49,50,51,52,53,54,55,56,57];
    var arr_size_xl = [58,59,60,61,62,63,64,65,66,67];
    var arr_size_xxl = [68,69,70,71,72,73,74,75,76,77];
    //
    $(".btn-s").click(function (){
        for(var i = 0;i<10;i++){
            $(".box"+(i+1)).text(arr_size_s[i]);
        }
    });
    $(".btn-m").click(function (){
        for(var i = 0;i<10;i++){
            $(".box"+(i+1)).text(arr_size_m[i]);
        }
    });
    $(".btn-l").click(function (){
        for(var i = 0;i<10;i++){
            $(".box"+(i+1)).text(arr_size_l[i]);
        }
    });
    $(".btn-xl").click(function (){
        for(var i = 0;i<10;i++){
            $(".box"+(i+1)).text(arr_size_xl[i]);
        }
    });
    $(".btn-xxl").click(function (){
        for(var i = 0;i<10;i++){
            $(".box"+(i+1)).text(arr_size_xxl[i]);
        }
    });

    // khi click vào ô kích thước
    $(".box-size-pro").click(function (){
        $(this).css('background-color','#666').css('color','white');
        $('.btn-click-add-to-cart').removeClass('disabled');
    });
    // xử lý sự kiện khi ckick vào nút thêm vào gio hàng
    $('.btn-click-add-to-cart').click(function () {
        // thay đổi số lượng có trong giỏ hangd
        var count = $('.cart .cart-text .count').text();
        var sum_product = parseInt(count)+1;
        $('.cart .cart-text .count').text(sum_product);
        $('#cart-model').modal('show');

    });
    $(document).on('click','.btn-click-view-cart',function () {
        var count = $('.cart .cart-text .count').text();
        var sum_product = parseInt(count)+1;
        $('.cart .cart-text .count').text(sum_product);
        window.location= 'cartPage.html';
    });

    // xử lý sự kiện  khi click vào sản phầm cùng loại ( tải lại trang và thay ảnh )
    $(".other1").click(function () {
        // thay ảnh
        $('.img-top-change').attr('src','images/sanpham8.jpg');
        $('.img-detail-part').find('.box-detail1 img').attr('src','images/sanphamchitie41.png');
        $('.img-detail-part').find('.box-detail2 img').attr('src','images/sanphamchitiet42.png');
        $('.img-detail-part').find('.box-detail3 img').attr('src','images/sanphamchitiet43.png');
        $('.img-detail-part').find('.box-detail4 img').attr('src','images/sanphamchitiet44.png');
        $(window).scrollTop(0);
    });
    $(".other2").click(function () {
        // thay ảnh
        $('.img-top-change').attr('src','images/sanpham3.jpg');
        $('.img-detail-part').find('.box-detail1 img').attr('src','images/anhchitiet31.png');
        $('.img-detail-part').find('.box-detail2 img').attr('src','images/anhchitiet32.png');
        $('.img-detail-part').find('.box-detail3 img').attr('src','images/anhchitiet3.png');
        $('.img-detail-part').find('.box-detail4 img').attr('src','images/anhchitiet3.1.png');
        $(window).scrollTop(0);
    });

    // xử lý sự kiện cho sản phẩm bán chạy nhất
    $(".sanpham .header-image-product .left").hide();
    $('.sanpham .info-product .footer-product').hide();

    $('.sanpham').mouseenter(function () {
        $(this).css('border','1px solid gray').css('border-radius','5px');
        $(this).find('.header-image-product .left').show();
        $(this).find('.info-product .footer-product').show();

// xử lý sự kiện di chuyển vào các ô nhỏ

        $(this).find('.box').mouseenter(function () {
            $(this).css('border','1px solid');
            var src= $(this).find('img').attr('src');

            $(this).parent().parent().find('.img-change').attr('src',src);
        });
        $(this).find('.box').mouseleave(function () {
            $(this).css('border','none');
        });
    });
    $('.sanpham').mouseleave(function () {
        var id = $(this).attr('id');
        $(this).css('border','none');
        $(this).find('.header-image-product .left').hide();
        $(this).find('.info-product .footer-product').hide();
    });



});