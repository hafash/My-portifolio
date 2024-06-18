// ********** set date ************
// select span
const date = (document.getElementById(
    "date"
).innerHTML = new Date().getFullYear());

// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
// add event listener
navBtn.addEventListener("click", () => {
    links.classList.toggle("show-links");
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(link => {
    link.addEventListener("click", e => {
        // prevent default
        e.preventDefault();
        links.classList.remove("show-links");

        const id = e.target.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        //
        let position = element.offsetTop - 62;

        window.scrollTo({
            left: 0,
            // top: element.offsetTop,
            top: position,
            behavior: "smooth"
        });
    });
});



var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName() {
    var name = document.getElementById('contact-name').value;
    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write a Full Name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-square-check"></i>';
    return true;
}
function validateEmail() {
    var email = document.getElementById('contact-email').value;
    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        emailError.innerHTML = 'Invalid email address';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-square-check"></i>';
    return true;
}

function validateMessage() {
    var message = document.getElementById('contact-message').value;
    var required = 50;
    var left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = left + 'more characters are required';
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-square-check"></i>';
    return true;
}

function validateForm() {
    if (!validateName() || !validateEmail() || !validateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'please fix error to send message';
        setTimeout(function () { submitError.style.display = 'none'; }, 3000)
        return false;
    }
}
