$(window).on('scroll', (e) => {
    if($(window).scrollTop()) {
        $(".header__inner").addClass('fixed')
    } else {
        $(".header__inner").removeClass('fixed')
    }
})