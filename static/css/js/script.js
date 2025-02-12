// Show a notification
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';
    
    setTimeout(() => {
      notification.style.display = 'none';
    }, 2000); // Hide after 2 seconds
  }
  

  let currentIndex = 0;

  function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
      }
    });
  }
  
  function autoSlide() {
    const slides = document.querySelectorAll('.carousel-item');
    currentIndex = (currentIndex + 1) % slides.length; // Loop back to the first slide
    showSlide(currentIndex);
  }
  
  // Initialize the first slide
  showSlide(currentIndex);
  
  // Auto-slide every 3 seconds
  setInterval(autoSlide, 2000);

  
  function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
    }
  

  