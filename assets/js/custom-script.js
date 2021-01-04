function resetForm() {
  $("#contact-form").trigger("reset");
}

function resetMessages() {
  $("#contact-success").removeClass("success");
  $("#contact-failure").removeClass("error");
}

$(document).ready(function () {
  // Change menu styling if not on top
  $(window).scroll(function() {
    var navbar_section = $(".navigation");
    var navbar_brand = $(".navbar > .navbar-brand");
    if ($(this).scrollTop() < ($(this).height() / 2)) {
      navbar_section.addClass("scroll-top");
      navbar_brand.css("opacity", "0");
    } else {
      navbar_section.removeClass("scroll-top");
      navbar_brand.css("opacity", "1");
    }
  });

  // Solutions trigger to initialise the first item
  $("#solutions .btn.active").click();

  // Contact form handling
  $("#contact-form").on("submit", function( event) {
    event.preventDefault();

    $.post(this.action, $(this).serialize(), function(formData) {
      resetForm();
      resetMessages();
      $("#contact-success").addClass("success");
    }, "json")
    .fail(function(errorData) {
      resetMessages();
      $("#contact-failure").addClass("error");
    })
  });
});
