document.addEventListener("DOMContentLoaded", function() {
    // Add event listener to all navbar links
    document.querySelectorAll('.navbar a').forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
  
        // Toggle active class in navbar
        document.querySelector('.navbar a.active').classList.remove('active');
        this.classList.add('active');
  
        // Toggle content visibility based on the clicked link
        var targetContentClass = this.getAttribute('data-content');
        document.querySelectorAll('.content').forEach(function(content) {
          if (content.classList.contains(targetContentClass)) {
            content.style.display = 'block';
          } else {
            content.style.display = 'none';
          }
        });
      });
    });
  
    // Add event listener to the GUN INFORMATION button
    document.querySelector('.gun-info').addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior
  
      // Toggle active class in navbar
      document.querySelector('.navbar a.active').classList.remove('active');
      this.classList.add('active');
  
      // Toggle content visibility based on the clicked link
      var targetContentClass = this.getAttribute('data-content');
      document.querySelectorAll('.content').forEach(function(content) {
        if (content.classList.contains(targetContentClass)) {
          content.style.display = 'block';
        } else {
          content.style.display = 'none';
        }
      });
    });
  });
  