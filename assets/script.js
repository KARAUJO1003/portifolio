window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var backToTopButton = document.getElementById('back-to-top');
  
    if (header.getBoundingClientRect().bottom <= 0) {
      backToTopButton.classList.remove('hidden');
    } else {
      backToTopButton.classList.add('hidden');
    }
  });
  
  document.getElementById('back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  