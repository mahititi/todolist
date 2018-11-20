function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

//avatar

$(document).ready(function(){
  responsive_menu = $('.navbar_ul');
  $('#menu-acces').on('click', function(e) {
    e.preventDefault();
    responsive_menu.slideToggle();
  });
  $(window).resize(function(){
    var obtener_ancho = $(this).width();
    if(obtener_ancho > 480 && responsive_menu.is(':hidden')) {
      responsive_menu.removeAttr('style');
    }
  });
  $('nav li').on('click', function(e) {
    var obtener_ancho = $(window).width();
    if(obtener_ancho < 480 ) {
      responsive_menu.slideToggle();
    }
  });
});
