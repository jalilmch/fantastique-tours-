const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Endpoint to receive form data
app.post('/submit-message', (req, res) => {
    const { name, email, message } = req.body;

    // Example: Send an email with the message using Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Or any email service provider
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password', // Use environment variables for security
        },
    });

    const mailOptions = {
        from: email,
        to: 'your-email@gmail.com',
        subject: `Message from ${name}`,
        text: message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error sending email');
        }
        res.status(200).send('Message sent successfully!');
    });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
