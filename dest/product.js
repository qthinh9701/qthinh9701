$(document).ready(function(){
    let carouselProduct = $('.product__list');
    carouselProduct.flickity({
        cellAlign: 'left',
        contain: true,
        prevNextButtons:false,
        wrapAround: true,
        pageDots: false
    });
    $('#control-1').on('click', function (){
        $('#list-item-1').flickity('next');
    });
    $('#control-2').on('click', function (){
        $('#list-item-2').flickity('next');
    });
    $('#control-3').on('click', function (){
        $('#list-item-3').flickity('next');
    });
    $('#control-4').on('click', function (){
        $('#list-item-4').flickity('next');
    });
    $('#control-5').on('click', function (){
        $('#list-item-5').flickity('next');
    });

    
    let carouselProdDetail = $(".banner__left-img"); 
    carouselProdDetail.flickity({
        cellAlign: 'left',
        contain: true,
        prevNextButtons:false,
        wrapAround: true,
        pageDots: false
    });
    $('.banner__left-control-prev').on('click', function (){
        $carousel.flickity('previous');
    });
    $('.banner__left-control-next').on('click', function (){
        $carousel.flickity('next');
    });
    

    let nav = $('.product-page-nav .nav');
    let heightBanner = $(".banner").outerHeight();
    $(document).on('scroll', function (){
        let scrollY = $(window).scrollTop();
        if(scrollY >heightBanner){
            nav.addClass('active');
        }
        else {
            nav.removeClass('active');
        }
    });


    
    let backToTop = $(".back-to-top");
    backToTop.click(function () {
        $("html, body").animate({scrollTop: 0}, 100);
        return false; 
     });
});