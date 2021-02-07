const section = document.querySelector('section');
const size = document.querySelector('.size');
console.dir(section)

section.onclick = function(e) {
    size.innerHTML = `${e.clientX} : ${e.clientY}`
    document.querySelector('.size2').innerHTML = `${e.pageX} : ${e.pageY}`
    console.log(e);
}