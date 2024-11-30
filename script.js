// Smooth Scroll to Top
window.addEventListener('scroll', () => {
    const scrollButton = document.querySelector('#scrollTopButton');
    if (window.scrollY > 300) {
      scrollButton.style.display = 'block';
    } else {
      scrollButton.style.display = 'none';
    }
  });
  
  // Scroll Top Function
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  // Add Scroll Top Button Dynamically
  document.body.innerHTML += `
    <button id="scrollTopButton" onclick="scrollToTop()" style="display: none; position: fixed; bottom: 20px; right: 20px; background: #007bff; border: none; padding: 10px 15px; color: white; border-radius: 50%; cursor: pointer; font-size: 20px;">
      ↑
    </button>
  `;
  
  // Toggle Animation on Cards
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', () => {
      card.style.transform = 'scale(1.05)';
    });
    card.addEventListener('mouseout', () => {
      card.style.transform = 'scale(1)';
    });
  });
  