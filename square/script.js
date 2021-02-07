const coords = []





console.log(coords);

for(let i = 0; i < 10; i++) {
    for(let j = 0; j < 10; j++) {
        coords.push({
            x: i * 50,
            y: j * 50
        })
    }
}


$(".main").on({
    mouseenter: moveToStartPos,
    mouseleave: moveToOriginalPos
})

function moveToOriginalPos() {
    let i = 0;
    $(".square").each(function() {
        this.style.left = `${coords[i].x}px`
        this.style.top = `${coords[i].y}px`
        i++
    })
}

function moveToStartPos() {
    $(".square").each(function() {
        this.style.left = `${-50}px`
        this.style.top = `${-50}px`
    })

    // $(".square").each(function() {
    //     this.amimate({
    //         left: `${0}px`,
    //         top: `${0}px`
    //     })
    // })
    
}

moveToOriginalPos()