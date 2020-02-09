const express = require('express');
var nodemailer = require('nodemailer');

const app = express();

app.get('/', (request, response) => {
    response.send('Derp');
});

app.get('/send_email', (request, response) => {
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, //true --> will use ssl
        auth: {
            user: 'sharperprogrammer@gmail.com',
            pass: ''  // use an app password, which is only available if you use 2-factor authentication
        }
    });
    
    var mailOptions = {
        from: 'sharperprogrammer@gmail.com',
        to: 'severanceh@gmail.com, sharperprogrammer@gmail.com',
        subject: 'Dis da subject',
        text: 'Some text',  // plain text body
        // html: '<b>this is bold</b>'  // html body
    };
    
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Message sent: ' + info.response);
        }
        transporter.close();
    });

    response.send('Email sent');
});

app.listen(3000);