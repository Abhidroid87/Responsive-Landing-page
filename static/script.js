const nav = document.getElementById('main-nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) { // Change background color after scrolling 100px (adjust as needed)
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Remove active class from all links on load
const links = document.querySelectorAll('nav a');
links.forEach(link => link.classList.remove('active'));

// Add active class and color change on click based on href attribute
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    links.forEach(link => link.classList.remove('active'));
    link.classList.add('active');

    // Simulate smooth scrolling to clicked section (optional)
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: "smooth" });
  });
});
