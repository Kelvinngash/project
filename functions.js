function toggleNavbar() {
    var navbar = document.getElementById("myNavbar");
    if (navbar.className === "navbar") {
        navbar.className += " responsive";
    } else {
        navbar.className = "navbar";
    }
}
document.getElementById("submit").addEventListener("click", function(event) {
    var firstName = document.getElementById("first_name").value;
    var lastName = document.getElementById("last_name").value;
    var email = document.getElementById("email").value;
    
    if (!firstName || !lastName || !email) {
        alert("Please fill in all required fields.");
        event.preventDefault();
    } else {
        alert("Form submitted successfully!");
    }
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
var slideIndex = 0;
showSlides();

function showSlides() {
    var slides = document.querySelectorAll("#services1 img, #services2 img");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll("#message");
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    slides.forEach((slide, i) => {
        slide.style.display = (i === currentSlide) ? "block" : "none";
    });
}

function changeSlide(step) {
    showSlide(currentSlide + step);
}

// Initial call to display the first slide
showSlide(currentSlide);