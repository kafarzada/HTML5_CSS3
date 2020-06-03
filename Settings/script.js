let items = document.querySelectorAll(".setting__item");

items.forEach(item => {
    item.addEventListener('click',  function(){
        this.classList.toggle("actived");
    })
})