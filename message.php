<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Retrieve form data
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  // Validate form data if needed
  // ...

  // Prepare email content
  $to = 'pavlos.savva@pavlosdesign.com'; // Replace with your email address
  $headers = "From: $email\r\n";
  $headers .= "Reply-To: $email\r\n";
  $content = "Subject: $subject\r\n";
  $content .= "Message: $message\r\n";

  // Send email
  $success = mail($to, $subject, $content, $headers);

  if ($success) {
    // Return success response
    echo 'Message sent successfully!';
  } else {
    // Return error response
    echo 'Error occurred. Please try again later.';
  }
}
?>
