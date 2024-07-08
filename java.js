// Add event listener to the "Join Now" button
document.addEventListener("DOMContentLoaded", function() {
    const joinButton = document.querySelector("button");
    joinButton.addEventListener("click", function() {
      // Add your own logic here, e.g., open a modal or redirect to a new page
      alert("Thank you for your interest! We'll be in touch soon.");
    });
  });
  
  // Add smooth scrolling to the navigation links
  document.querySelectorAll("nav a").forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({
        behavior: "smooth"
      });
    });
  });