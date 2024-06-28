
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const img4 = document.querySelector('.img4');

const circle = document.querySelector('.circle');

const removeScaleFromImg = () => {
    img1.classList.remove('scaleimg');
    img2.classList.remove('scaleimg');
    img3.classList.remove('scaleimg');
    img4.classList.remove('scaleimg');
}

const removeRotateFromCircle = () => {
    circle.classList.remove('rotate90');
    circle.classList.remove('rotate180');
    circle.classList.remove('rotate270');
    circle.classList.remove('rotate360');
}   

img1.addEventListener('click',()=>{
    removeScaleFromImg();
    removeRotateFromCircle();
    img1.classList.toggle('scaleimg');
    circle.classList.toggle('rotate90');
})

img2.addEventListener('click',()=>{
    removeRotateFromCircle();
    removeScaleFromImg();
    img2.classList.toggle('scaleimg');
    circle.classList.toggle('rotate180');
})

img3.addEventListener('click',()=>{
    removeRotateFromCircle();
    removeScaleFromImg();
    img3.classList.toggle('scaleimg');
    circle.classList.toggle('rotate270');
})

img4.addEventListener('click',()=>{
    removeRotateFromCircle();
    removeScaleFromImg();
    img4.classList.toggle('scaleimg');
    circle.classList.toggle('rotate360');
})



