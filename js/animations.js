
// footer
document.getElementById("year").innerHTML = new Date().getFullYear();
document.querySelectorAll('.lbl-toggle').forEach(label => {
  label.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          label.click(); // Simulate a click on the label
      }
  });

  label.addEventListener('click', () => {
      const checkbox = document.getElementById(label.getAttribute('for'));
      const expanded = checkbox.checked;
      label.setAttribute('aria-expanded', expanded);
  });
});

// keyboard nav access
function toggleMenu(event) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    const menuCheckbox = document.getElementById("menu");
    const menuLabel = document.querySelector('label[for="menu"]');
    menuCheckbox.checked = !menuCheckbox.checked;
    menuLabel.setAttribute("aria-expanded", menuCheckbox.checked);
  }
}

// slideshow
let slideIndex = 1;
showSlides(slideIndex);

let poemIndex = 1;
showPoem(poemIndex);

// Next/previous controls
function plusSlides(n) {
  slideIndex += n; // Increment or decrement slideIndex
  poemIndex += n;  // Increment or decrement poemIndex

  // Call both functions with the updated indices
  showSlides(slideIndex);
  showPoem(poemIndex);
}

// Thumbnail image controls
function currentSlide(n) {
showSlides(slideIndex = n)
showPoem(poemIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

  // Add condition for the last slide
  if (slideIndex === slides.length) {
    console.log("This is the last slide.");
    // Add any additional logic for the last slide here
    document.getElementById("title").style.color = "beige";
    document.getElementById("author").style.color = "beige";
    document.getElementById("arbor-day-msg").style.color = "beige";
    document.getElementById("arbor-day-msg").style.fontSize = "3rem";
     document.getElementById("arborDayLink").style.color = "#58be54";
    document.getElementById("arborDayLink").style.fontSize = "3rem";
    document.getElementById("line 17").style.color = "rgb(52, 33, 14)";
  }
}

function showPoem(n) {
  let i;
  let poemSlides = document.getElementsByClassName("poem");
  let dots = document.getElementsByClassName("dot");
  if (n > poemSlides.length) {poemIndex = 1}
  if (n < 1) {poemIndex = poemSlides.length}
  for (i = 0; i < poemSlides.length; i++) {
    poemSlides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  poemSlides[poemIndex-1].style.display = "block";
  dots[poemIndex-1].className += " active";

  // Conditional logic for different screen sizes
  if (window.matchMedia("(min-width: 1040px)").matches) {
    console.log("Desktop view: Poem is active.");
    Array.from(document.getElementsByClassName("poem")).forEach(poem => {
      poem.style.opacity = "1";
    });
    for (i = 0; i < poemSlides.length; i++) {
      poemSlides[i].classList.remove("active");
      for (let j = 0; j < dots.length; j++) { // Use a different variable name
        dots[j].className = dots[j].className.replace(" active", "");
      }
    }
    // Keep the previous element visible
    for (let k = 0; k < poemIndex; k++) {
      poemSlides[k].style.display = "block";
    }
    poemSlides[poemIndex - 1].classList.add("active");
    dots[poemIndex - 1].className += " active";
  } else {
    console.log("Mobile view: Poem is active.");
  }

  console.log("Number of poem elements:", poemSlides.length);
}

function handleKey(event, direction) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault(); // Prevent default scrolling behavior for Space
    plusSlides(direction); // Call the same function as the click event
  }
}
  // source: https://stackoverflow.com/questions/42572840/adding-media-queries-from-js

  function updateSlideStatus(current, total) {
    const slideStatus = document.getElementById("slideStatus");
    slideStatus.textContent = `Slide ${current} of ${total}`;
  }
// Audio Controls
document.getElementById("forestSounds").loop = true;

let aud = document.getElementById("forestSounds");
aud.controls = true;




