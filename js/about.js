// Carousel
    const carousel = document.getElementById('carousel');
    let index = 0;

    setInterval(() => {
      index = (index + 1) % 4; // Assuming there are 4 slides
      carousel.style.transform = `translateX(-${index * 100}%)`;
    }, 3000); // Change slide every 3 seconds  

    