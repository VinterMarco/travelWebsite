// parallax

const parallax = document.getElementById('parallax');
window.addEventListener('scroll', function () {
    let offSet = window.pageYOffset;
    console.log(offSet)
    parallax.style.backgroundPositionY = offSet
    + 2.5 + "px";

})


// moving circles

let circlesWrapper = document.querySelector('.circles-wrapper');
let circle1 = document.querySelector('.circle-1')
let circle2 = document.querySelector('.circle-2')
let circle3 = document.querySelector('.circle-3')
let circle4 = document.querySelector('.circle-4')
let circle5 = document.querySelector('.circle-5')


let check_div = document.querySelector('.circles-wrapper');
window.addEventListener('mousemove', event => {
    if (event.target == check_div ||
        Array.from(check_div.children).includes(event.target)) {
        circle1.style.animation = "animation_1 infinite linear 2s";
        circle2.style.animation = 'animation_2 infinite linear 6s';
        circle3.style.animation = 'animation_3 infinite linear 6s';
        circle4.style.animation = 'animation_4 infinite linear 8s';
        circle5.style.animation = 'animation_5 infinite linear 8s';

    } else {
        console.log(false, 'mouse out');
        circle1.style.animation = "none";
        circle2.style.animation = 'none';
        circle3.style.animation = 'none';
        circle4.style.animation = 'none';
        circle5.style.animation = 'none';

    }
});


//  second circle animation

let orangeCircle = document.
querySelector('.orange-circle');
let secondCircleContainer = document.
querySelector('.second-circle-wrapper');

window.addEventListener('mousemove', event => {
    if (event.target == secondCircleContainer ||
        Array.from(secondCircleContainer.children).includes(event.target)) {
        orangeCircle.style.animation = "colorCircles infinite linear 5s"
    } else {
        orangeCircle.style.animation = "none";
    }
});


