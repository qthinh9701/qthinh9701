$(document).ready(function(){
    

    
    let carouselProdDetail = $(".banner__left-img"); 
    carouselProdDetail.flickity({
        cellAlign: 'left',
        contain: true,
        prevNextButtons:false,
        wrapAround: true,
        pageDots: false,
        draggable: true,
    });
    $('.banner__left-control-prev').on('click', function (){
        carouselProdDetail.flickity('previous');
    });
    $('.banner__left-control-next').on('click', function (){
        carouselProdDetail.flickity('next');
    });
    

    
  
});