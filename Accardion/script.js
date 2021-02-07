$(".nav__item").click(function(e) {
    if(e.target.dataset.tab == 2) {
        $('.line').css({"transform":"translateX(100%)"})
    }

    if(e.target.dataset.tab == 1) {
        $('.line').css({"transform": "translateX(0%)"})
    }

    if(e.target.dataset.tab == 3) {
        $('.line').css({"transform": "translateX(200%)"})
    }
})

$(this).click(function(e) {
    console.log(e.target);
})