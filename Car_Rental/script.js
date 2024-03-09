function showCarDetails(event,carId) {
    // Prevent the default anchor tag behavior
    event.preventDefault();


    // Get the selected car details
    var carModel = document.querySelector(`#${carId} h3`).textContent;
    var carRating = document.querySelector(`#${carId} p`).textContent;
    var carPrice = document.querySelector(`#${carId} h2`).textContent;
    var carImageSrc = document.querySelector(`#${carId} img`).src;

  // Display the selected car details
    console.log("Car Image Source:", carImageSrc);
    document.getElementById('carModel').textContent = carModel;
    document.getElementById('carRating').textContent = carRating;
    document.getElementById('carPrice').textContent = carPrice;
    document.getElementById('carImage').innerHTML = `<img src="${carImageSrc}" alt="${carModel}">`;


    // Show the checkout page when the button is clicked
    document.getElementById('checkoutPage').style.display = 'block';
    document.getElementById('cars_page').style.display='none';
    // document.getElementById('boddy').style.backgroundColor='grey';
}

// function processPayment(event) {
//     event.preventDefault();
    
//     // Here, you would typically send the form data to a server for processing,
//     // perform payment validation, and handle the transaction.

//     // For this example, let's just show an alert indicating a successful checkout.
//     alert('Payment Successful! Car rented.');
// }