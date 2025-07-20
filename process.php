<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $message = htmlspecialchars($_POST['message']);

  // Simple validation
  if (!empty($name) && !empty($email) && !empty($message)) {
    // Send email or save to DB as needed
    // mail($email_to, $subject, $body); <-- example

    echo "Thank you, $name! Your message has been received.";
  } else {
    echo "All fields are required.";
  }
} else {
  echo "Invalid Request";
}
?>
