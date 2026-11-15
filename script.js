let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let header = document.querySelector('header');

// Open / close the mobile menu
menuIcon.onclick = () => {
     menuIcon.classList.toggle('bx-x');
     navbar.classList.toggle('active');
};

// Close the mobile menu after a link is tapped
navLinks.forEach(link => {
     link.addEventListener('click', () => {
          menuIcon.classList.remove('bx-x');
          navbar.classList.remove('active');
     });
});

window.onscroll = () => {
     let top = window.scrollY;

     // Highlight the nav link for the section on screen
     sections.forEach(sec => {
          let offset = sec.offsetTop - 150;
          let height = sec.offsetHeight;
          let id = sec.getAttribute('id');

          if (top >= offset && top < offset + height) {
               navLinks.forEach(link => link.classList.remove('active'));
               document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
          }
     });

     header.classList.toggle('sticky', top > 100);

     // Close the mobile menu when scrolling
     menuIcon.classList.remove('bx-x');
     navbar.classList.remove('active');
};
