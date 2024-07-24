let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Typing text Code

const typed = new Typed('.multiple-text', {
    strings: ['Physical fitness', 'Weight Gain' , 'Stength Trainig' , 'Fat Lose' , 'Weight Liftung' ,'Running'],
    typeSpeed: 60,
    backspeed: 60,
    backdelay: 1000,
    loop: true,
  });