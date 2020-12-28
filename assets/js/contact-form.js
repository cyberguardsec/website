function resetForm() {
  $("#contact-form").trigger("reset");
}

function resetMessages() {
  $("#contact-success").removeClass("success");
  $("#contact-failure").removeClass("error");
}

$(document).ready(function () {
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
