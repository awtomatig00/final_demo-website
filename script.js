let currentIndex = 0;
const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
    // Loop the index if out of range
    if (index >= dots.length) index = 0;
    if (index < 0) index = dots.length - 1;

    // Update the transform property to slide
    slides.style.transform = `translateX(-${index * 100}%)`;

    // Update active dot
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");

    currentIndex = index;
}

function currentSlide(index) {
    showSlide(index - 1);
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

// Auto-slide every 3 seconds
setInterval(nextSlide, 3000);
