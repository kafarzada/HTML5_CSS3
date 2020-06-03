let items = document.querySelectorAll(".setting__item");

items.forEach(item => {
    item.addEventListener('click',  function(){
        this.classList.toggle("actived");

        if(this.hasAttribute("lightMood")) {
            document.body.classList.toggle("light");
        }
    })
})