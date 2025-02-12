<?php
// This is the backend script to handle the password reset

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get email from the form
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format.";
        exit;
    }

    // Check if the email exists in your database (replace with actual database code)
    $server_email = "user@example.com"; // Example email, replace with your database check

    if ($email === $server_email) {
        // Generate a reset token (this can be a random token stored in the database)
        $reset_token = bin2hex(random_bytes(16)); // Example token generation
        $reset_link = "https://yourwebsite.com/reset_password.php?token=" . $reset_token;

        // Send the reset link to the user's email (replace with actual email sending logic)
        $subject = "Password Reset Request";
        $message = "Click the following link to reset your password: " . $reset_link;
        $headers = "From: no-reply@yourwebsite.com";

        if (mail($email, $subject, $message, $headers)) {
            echo "Password reset link has been sent to your email.";
        } else {
            echo "Failed to send the reset email.";
        }
    } else {
        echo "No account found with that email address.";
    }
}
?>
