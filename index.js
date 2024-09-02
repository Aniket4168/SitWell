const chairImages = document.querySelectorAll('.img-wrap');
const colorInputs = document.querySelectorAll('.for-color');

colorInputs.forEach((input, index) => {
  input.addEventListener('change', () => {
    if (input.checked) {
      chairImages[index].style.opacity = 1;
      chairImages[index].style.animation = 'shake 0.7s cubic-bezier(0.36, 0.07, 0.19, 0.97) both';
    } else {
      chairImages[index].style.opacity = 0;
      chairImages[index].style.animation = '';
    }
  });
});

// Set background images for each chair
chairImages.forEach((image, index) => {
  image.style.backgroundImage = `url("./images/chair${index + 1}.png")`;
});