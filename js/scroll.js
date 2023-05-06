 $(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()){
            $('.fa-bars').addClass('text-light');
            $('.header').addClass('sticky');
            $('.menu').addClass('sticky1');
            $('.search-cart').addClass('sticky2');
        } 
        else {
        $('.fa-bars').removeClass('text-light');
        $('.header').removeClass('sticky');
        $('.menu').removeClass('sticky1');
        $('.search-cart').removeClass('sticky2');
        }
    })

    $('.fa-bars').click(function(){
        $('.menu').slideToggle();
    })
    $('.btn-account').click(function(){
        $('.account-list').slideToggle();
    })
})

