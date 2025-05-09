// Highlight current page in navigation
document.addEventListener('DOMContentLoaded', function() {
    // Get current page URL
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Find all nav links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Add active class to current page link
    navLinks.forEach(link => {
      const linkPage = link.getAttribute('href').split('/').pop();
      if (linkPage === currentPage) {
        link.classList.add('active');
      }
    });
    
    // Hide home link when not on home page
    if (currentPage !== 'index.html') {
      const homeLink = document.querySelector('.nav-link[href="index.html"]');
      if (homeLink) {
        homeLink.style.display = 'none';
      }
    }
  });