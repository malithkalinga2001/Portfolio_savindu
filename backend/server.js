const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000;

// Middleware to parse incoming requests
app.use(cors());
app.use(bodyParser.json());

// Email sending route
app.post("/contact", async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail", // You can use other services like SendGrid, Mailgun, etc.
    auth: {
      user: "malithkalinga956@gmail.com", // Replace with your email
      pass: "hldt whyn hclg sfmh",  // Replace with your email password or app-specific password
    },
  });

  // Mail options
  const mailOptions = {
    from: email, // Sender's email
    to: "your-email@gmail.com", // Replace with your email to receive the message
    subject: `New Contact Message from ${firstName} ${lastName}`,
    text: `You have a new message from ${firstName} ${lastName} (${email}, ${phone}):
      Message: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ code: 200, message: "Message sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ code: 500, message: "Something went wrong. Please try again later." });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
