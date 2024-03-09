//Abhavya part



// script.js
const backgroundImages = [
  "url('image1.jpg')",
  // "url('image.jpg')",
  // "url('image3.jpg')",
  "url('image3.jpg')"
  // Add more image URLs here
];
//Image changing js
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


// // For the response form in content div
// function submitForm(event) {
//   event.preventDefault(); // Prevent default form submission behavior

//   // Check if all fields are filled
//   var brand = document.getElementById('brand').selectedIndex;
//   var model = document.getElementById('model').selectedIndex;
//   var type = document.getElementById('type').selectedIndex;

//   if (brand <= 0 || model <= 0 || type <= 0) {
//       alert('Please fill in all fields.'); // Display popup
//   } else {
//       // All fields are filled, proceed with form submission
//       document.getElementById('rideForm').style.display = 'none'; // Hide the form
//       document.getElementById('submissionMessage').style.display = 'block'; // Show the submission message
//   }
// }

//Time calculation
var hours;

document.getElementById("timeForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Get start and end time values
  var startTime = new Date(document.getElementById("startTime").value);
  var endTime = new Date(document.getElementById("endTime").value);

  // Calculate the time difference in milliseconds
  var timeDifference = endTime - startTime;

  // Convert milliseconds to hours, minutes, and seconds
  hours = Math.floor(timeDifference / 3600000);
  var minutes = Math.floor((timeDifference % 3600000) / 60000);
  var seconds = Math.floor((timeDifference % 60000) / 1000);

  // Display the time difference
  alert("Time Difference: " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds.");
});

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



//Shivanshu's part


var carPrice;
function showCarDetails(event,carId) {
    // Prevent the default anchor tag behavior
    event.preventDefault();


    // Get the selected car details
    var carModel = document.querySelector(`#${carId} h3`).textContent;
    var carRating = document.querySelector(`#${carId} p`).textContent;
    carPrice = document.querySelector(`#${carId} h2`).textContent;
    var carImageSrc = document.querySelector(`#${carId} img`).src;

  // Display the selected car details
    console.log("Car Image Source:", carImageSrc);
    document.getElementById('carModel').textContent = carModel;
    document.getElementById('carRating').textContent = carRating;
    document.getElementById('carPrice').textContent = carPrice;
    document.getElementById('carImage').innerHTML = `<img src="${carImageSrc}" alt="${carModel}">`;


//Calculation part of checkout;

  document.getElementById('total-time').textContent=hours;
  var totalPrice = parseInt(carPrice.match(/\d+/)[0]);
  console.log(totalPrice);
  
  document.getElementById('trip-amount').textContent=totalPrice+ "×"+ hours;
  var totalAmount=totalPrice*hours;
  document.getElementById('total-amount').textContent=totalAmount;
//protection fee(7%)
  var prot_amount=(totalAmount*7)/100
document.getElementById('protection-amount').textContent=prot_amount;
//summ-total
  var sum_total=totalAmount+prot_amount+99;
document.getElementById('final-total').textContent=sum_total;

    // Show the checkout page when the button is clicked
    document.getElementById('checkoutPage').style.display = 'block';
    document.getElementById('cars_page').style.display='none';
    document.getElementById('front').style.display='none';
}

// function processPayment(event) {
//     event.preventDefault();
    
//     // Here, you would typically send the form data to a server for processing,
//     // perform payment validation, and handle the transaction.

//     // For this example, let's just show an alert indicating a successful checkout.
//     alert('Payment Successful! Car rented.');
// }

function hide_checkout(){
  document.getElementById('checkoutPage').style.display = 'none';
  document.getElementById('front').style.display = 'block';
  document.getElementById('cars_page').style.display = 'block';
  
}