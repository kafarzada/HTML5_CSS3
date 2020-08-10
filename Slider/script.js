const next_btn = document.querySelector('.btn__next'),
      prev_btn = document.querySelector('.btn__prv'),
      slides = document.querySelectorAll('.slide'),
      dots_wrapper = document.querySelector('.dots'),
      btn_autoPlay = document.getElementById('btn_autoPlay')
let dots = [];
let index_slider = 0;
let isAutoPlay = false;

window.onload = function() {

    const setActive = (n) => {
        for(slide of slides) {
            slide.classList.remove('active')
        }
    
        slides[n].classList.add('active')
    }

    const setActiveDot = (n) => {
        dots.forEach(function(item){
            item.classList.remove('active')
        });
        dots[n].classList.add('active')
    }
    

    
    slides.forEach(item = () =>{
        dots.push(createSpan(dots_wrapper))
        dots[0].classList.add('active')
    })


    dots.forEach(function(item ,index){
        item.addEventListener('click', function() {
            index_slider = index
            setActive(index)
        })
    })

    const neexbtnClickHandler = () => {
        if (index_slider >= slides.length - 1) {
            index_slider = 0;
            setActive(index_slider);
            setActiveDot(index_slider)
        } else {
            index_slider++;
            setActive(index_slider)
            setActiveDot(index_slider)
        }
    }
    const prevbtnClickHandler =() => {
        if(index_slider <= 0) {
            index_slider = slides.length - 1
            setActive(index_slider);
            setActiveDot(index_slider)
        } else {
            index_slider--;
            setActive(index_slider);
            setActiveDot(index_slider)
        }
    }
    

    next_btn.addEventListener('click', function() {
        neexbtnClickHandler()
    })

    prev_btn.addEventListener('click', () => {
        prevbtnClickHandler()
    })



    dots.forEach((item, index) => {
        item.addEventListener('click', () => {
            setActive(index)
            setActiveDot(index)
            index_slider = index
        })
    })
    
    const autoPlayClickhandler = () => {  
        if(isAutoPlay) {
         setInterval(function() {
                neexbtnClickHandler()
            }, 2000)
        }
    }

    btn_autoPlay.addEventListener('click',() => {
        isAutoPlay = !isAutoPlay
        autoPlayClickhandler()
    })

}

function createSpan(dots){
    const dot = document.createElement('span')
    dot.classList.add('dot')
    dots.appendChild(dot)
    return dot
}


