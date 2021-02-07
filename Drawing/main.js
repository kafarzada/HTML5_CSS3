window.addEventListener('load', () => {
    let isDrawing = false
    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d')
    let imageData  ;


    document.querySelector('canvas').onmousemove = function(e) {
        if(!isDrawing) return;

        context.lineWidth = 10;
        context.lineCap = 'round'
        context.lineTo( e.clientX, e.clientY)
        context.stroke()
        context.beginPath();
        context.moveTo(e.clientX, e.clientY)
    }   

    document.querySelector('canvas').onmousedown = function() {
        isDrawing = true
    }
})