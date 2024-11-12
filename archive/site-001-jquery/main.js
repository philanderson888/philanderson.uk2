// main.js
$(document).ready(function() {
    // Load the header
    $("#header-placeholder").load("header.html", function() {
      
      // Toggle mobile menu
      $("#menu-icon").on("click", function() {
        $("#menu").toggleClass("show");
      });
      
      // Toggle submenus
      $(".has-submenu").on("click", function(event) {
        event.preventDefault();
        $(this).siblings(".submenu").slideToggle();
      });
      
    });
  });
  