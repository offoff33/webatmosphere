document.addEventListener('DOMContentLoaded', () => {
  // Find all buttons that should scroll to a target on click
  const scrollButtons = document.querySelectorAll('.js-scroll-to');

  scrollButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
