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
  