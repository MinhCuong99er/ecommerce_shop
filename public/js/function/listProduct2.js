// xư lý sự kiện của danh sách chi tiết sản phầm
$(document).ready(function () {
    // xử lý sự kiện  hiển thị/ẩn lọc theo nhà sản xuất

    $(document).on('click','.hide-show-producer',function () {
        var data_producer = $(this).data('check');

        if(data_producer =='show'){
            // xóa cladd mũi tên xuống
            $(this).removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
            // thay đổi lại thuộc tính
            $(this).data('check','hide');
            $(".body-producer").hide(500);
        }
        if(data_producer == 'hide'){
            $(this).removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
            // thay đổi lại thuộc tính
            $(this).data('check','show');
            $(".body-producer").show(500);
        }
    });

    //  xử lý  sự kiện cho lọc theo model
    $(document).on('click','.hide-show-model',function () {
        var data_model = $(this).data('check');

        if(data_model =='show'){
            // xóa cladd mũi tên xuống
            $(this).removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
            // thay đổi lại thuộc tính
            $(this).data('check','hide');
            $(".body-model").hide(500);
        }
        if(data_model == 'hide'){
            $(this).removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
            // thay đổi lại thuộc tính
            $(this).data('check','show');
            $(".body-model").show(500);
        }
    });

    // lọc theo kích thước
    $(document).on('click','.hide-show-size',function () {
        var data_size = $(this).data('check');

        if(data_size=='show'){
            // xóa cladd mũi tên xuống
            $(this).removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
            // thay đổi lại thuộc tính
            $(this).data('check','hide');
            $(".body-size").hide(500);
        }
        if(data_size == 'hide'){
            $(this).removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
            // thay đổi lại thuộc tính
            $(this).data('check','show');
            $(".body-size").show(500);
        }
    });

    // lọc theo mau sẵc
    $(document).on('click','.hide-show-color',function () {
        var data_color = $(this).data('check');

        if(data_color =='show'){
            // xóa cladd mũi tên xuống
            $(this).removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
            // thay đổi lại thuộc tính
            $(this).data('check','hide');
            $(".body-color").hide(500);
        }
        if(data_color == 'hide'){
            $(this).removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
            // thay đổi lại thuộc tính
            $(this).data('check','show');
            $(".body-color").show(500);
        }
    });

    // xử lý sự kiện lọc sản phẩm theo các tiêu chí
    $('input[type="checkbox"]').click(function(){
         // load lại trang web
        // xóa bớt các thành phân
        $("#pro4").remove();
        $("#pro5").remove();
        $("#pro6").remove();
        $("#pro7").remove();
        $("#pro8").remove();
        $("#pro9").remove();
        // trở về trang chủ
        $(window).scrollTop(0);
    });

    //  xử lý sự kiện khi người dùng click vao sản phẩm
    $(document).on('click','.product',function () {
        window.location="productDetails.html";
    });
    $(document).on('click','.btn-click-xem-chi-tiet',function () {
        window.location="productDetails.html";
    });
    $(document).on('click','.btn-click-muahang',function () {
        window.location="cartPage.html";
    });

    // ban đâu sẽ ẩn  hết các thành phần( phần ảnh review và  các nút bấm)
    $(".product .header-image-product .left").hide();
    $('.product .info-product .footer-product').hide();

    $('.product').mouseenter(function () {
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
    $('.product').mouseleave(function () {
        var id = $(this).attr('id');
        $(this).css('border','none');
        $(this).find('.header-image-product .left').hide();
        $(this).find('.info-product .footer-product').hide();
    });



});

