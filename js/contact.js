// JavaScript Document
$( document ).ready(function() {
  // Handle form submission
  $("#contactForm").submit(function(event) {
    event.preventDefault();

    // Validate form inputs
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert("Please fill out all fields.");
      return;
    }

    // Send the email using a server-side script (e.g., PHP)
    // Replace "YOUR_EMAIL_ADDRESS" with your actual email address to receive messages
    var data = {
      name: name,
      email: email,
      message: message
    };

    $.post("../send_email.php", data, function(response) {
      alert(response); // Show a success message or handle the response as needed
      // Clear the form inputs after successful submission
      $("#name").val('');
      $("#email").val('');
      $("#message").val('');
    });
  });
});