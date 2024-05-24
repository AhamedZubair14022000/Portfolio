const toggleButton = document.getElementById('menuIcon');
const navContent = document.getElementById('navContent');
const navbar = document.querySelector('.header');
const homeEl = document.getElementById('home');

toggleButton.addEventListener('click', function() {
    navbar.classList.toggle('expanded');
    if (navbar.classList.contains('expanded')) {
        toggleButton.classList.add('fa-xmark');
        // homeEl.classList.add('padding-added');
    } else {
        toggleButton.classList.remove('fa-xmark');
        // homeEl.classList.remove('padding-added');
    }
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let mailBtnEl = document.getElementById('mailBtn');
mailBtnEl.addEventListener('click', function sendMail() {

    const inputs = document.querySelectorAll('#contact-form input, #contact-form textarea');
    let allFilled = true;

    inputs.forEach(function(input) {
        if (input.value.trim() === '') {
            allFilled = false;
        }
    });

    if (!allFilled) {
        alert('Please fill in all the fields.');
    } else {
        var params = {
            from_name: document.getElementById("fullName").value,
            email_id: document.getElementById("emailId").value,
            mobile_no: document.getElementById("mobileNo").value,
            subject: document.getElementById("emailSubject").value,
            message: document.getElementById("emailContent").value,
        };
        console.log(params);
        emailjs.send("service_h4fy952", "template_02iw3f8", params)
            .then(res => {
                alert("Your Mail Send Successfully! " + res.status);
                console.log(res.status);
            })
            .catch(error => alert("Error Occured Try Again! " + error.message));
    }
});


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

    toggleButton.classList.remove('fa-xmark');
    navbar.classList.remove('expanded');
    homeEl.classList.remove('padding-added')
};


ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', {
    origin: 'top'
});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, #contact-form', {
    origin: 'button'
});
ScrollReveal().reveal('.home-contact h1, .about-img', {
    origin: 'left'
});
ScrollReveal().reveal('.home-contact p, .about-content', {
    origin: 'right'
});

const typed = new Typed('.text', {
    strings: ['Frontend Developer', 'Web Developer', 'Backend Developer', 'Full-Stack Developer'],
    typedSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
    showCursor: false,
});
