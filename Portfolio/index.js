let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');

menuIcon.addEventListener('click', function() {
    menuIcon.classList.toggle('fa-xmark');
    navBar.classList.toggle('active')
});

let sections = document.querySelectorAll('section');
let navLinks =document.querySelectorAll('header nav a');

function sendMail() {
    var params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("emailId").value,
        mobile_no: document.getElementById("mobileNo").value,
        subject: document.getElementById("emailSubject").value,
        message: document.getElementById("emailContent").value,
    }
    console.log(params);
    emailjs.send("service_h4fy952", "template_02iw3f8", params)
    .then(res => {
        alert("Success! " + res.status);
        console.log(res.status);
    })
    .catch(error => alert("Failure! " + error.message));
}


window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            let activeLink = document.querySelector('header nav a[href*=' + CSS.escape(id) + ']');
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', top > 100);

    menuIcon.classList.remove('fa-xmark');
    navBar.classList.remove('active');
};


ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact-form', {origin: 'button'});
ScrollReveal().reveal('.home-contact h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-contact p, .about-content', {origin: 'right'});

const typed = new Typed('.text', {
    strings: ['Frontend Developer', 'Web Developer', 'Backend Developer', 'Full-Stack Developer'],
    typedSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});