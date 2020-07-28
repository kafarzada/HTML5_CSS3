$(window).on('scroll', (e) => {
    if($(window).scrollTop()) {
        $(".header__inner").addClass('fixed')
    } else {
        $(".header__inner").removeClass('fixed')
    }
})


const navLinks = document.querySelectorAll('.nav__itemLink');
navLinks.forEach(function(item) {
    
    item.addEventListener('click',  function() {
        navLinks.forEach(function(item) {
            item.classList.remove('active')
        })
        item.classList.add('active')
    })
})