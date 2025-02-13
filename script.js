/* script.js */
const slider = document.getElementById("slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;
const totalSlides = document.querySelectorAll(".card").length;

function updateSliderPosition() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;

    window.scrollTo({ top: 0, behavior: "smooth" });
    
    prevBtn.style.display = currentIndex === 0 ? "none" : "block";
    nextBtn.style.display = currentIndex === totalSlides - 1 ? "none" : "block";
}

prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
    }
});

nextBtn.addEventListener("click", () => {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
        updateSliderPosition();
    }
});

// Initialize slider
updateSliderPosition();
