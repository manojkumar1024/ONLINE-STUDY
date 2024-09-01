let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}


/****** validation ******/

let id = function(id) { return document.getElementById(id)};

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
email = id("email"),
password = id("password"),
form = id("form"),

errorMsg = classes("error"),
successIcon = classes("success-icon"),
failureIcon = classes("failure-icon");

function validateForm() {
    const name = id('username').value;
    const email = id('email').value;
    const password = id('password').value;

    if (name.trim() === '') {
        
        alert("Username can't be blank");
        return false;
    } else if (name.length <= 3) {
        alert('Name must be at least 3 letters long.');
        return false;
    }

    if (email.trim() === '') {
        alert("Email can't be blank");
        return false;
    } else {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address");
            return false;
        }
    }

    if (password.trim() === '') {
        alert("Password can't be blank");
        return false;
    }

    alert('Form submitted successfully!');
    return true;
}

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Call the validation function
    if (validateForm()) {
        // If validation is successful, proceed with form submission
        // You can submit the form using the following line:
        // e.target.submit();
    }
    
});

let engine = (id, serial, message) => {
    if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";

        // icons
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    } else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";

        // icons
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";   
    }
}