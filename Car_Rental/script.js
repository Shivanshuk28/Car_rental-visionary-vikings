// script.js
const backgroundImages = [
  "url('image1.jpg')",
  // "url('image.jpg')",
  // "url('image3.jpg')",
  "url('image3.jpg')"
  // Add more image URLs here
];

let currentImageIndex = 0;

function changeBackground() {
  currentImageIndex = (currentImageIndex + 1) % backgroundImages.length; // Loop through array

  document.getElementById('main').style.backgroundImage = backgroundImages[currentImageIndex];

  // Synchronize nav bar color (optional)
  // let newColor = getBackgroundColorFromImage(backgroundImages[currentImageIndex]);
  // document.getElementById('nav-bar').style.backgroundColor = newColor;

  // Add more logic for synchronizing nav bar based on your requirement
}

function getBackgroundColorFromImage(imageUrl) {
  // This function requires a library like ColorThief.js to extract the dominant color
  // You can add it to your project and implement this function accordingly
  // (https://github.com/johnregan/ColorThief.js)
  const colorThief = new ColorThief();
  const image = new Image();
  image.src = imageUrl;
  image.onload = () => {
    const palette = colorThief.getPalette(image);
    return `rgb(${palette[0]}, ${palette[1]}, ${palette[2]})`;
  };
}

setInterval(changeBackground, 5000); // Change background every 5 seconds (adjust as needed)


// For the response form in content div
function submitForm(event) {
event.preventDefault(); // Prevent default form submission behavior

// Check if all fields are filled
var brand = document.getElementById('brand').selectedIndex;
var model = document.getElementById('model').selectedIndex;
var type = document.getElementById('type').selectedIndex;

if (brand <= 0 || model <= 0 || type <= 0) {
    alert('Please fill in all fields.'); // Display popup
} else {
    // All fields are filled, proceed with form submission
    document.getElementById('rideForm').style.display = 'none'; // Hide the form
    document.getElementById('submissionMessage').style.display = 'block'; // Show the submission message
}
}

// For the login popup
function openPopup() {
document.getElementById('popup').style.display = 'block';
document.getElementById('overlay').style.display = 'block';
}

function closePopup() {
document.getElementById('popup').style.display = 'none';
document.getElementById('overlay').style.display = 'none';
}


// Login-sign up content
function toggleForm(formType) {
if (formType === 'signup') {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
    document.querySelector('.tab.active').classList.remove('active');
    document.querySelectorAll('.tab')[1].classList.add('active');
} else if (formType === 'login') {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signupForm').style.display = 'none';
    document.querySelector('.tab.active').classList.remove('active');
    document.querySelectorAll('.tab')[0].classList.add('active');
}
}