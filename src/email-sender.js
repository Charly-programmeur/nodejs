const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'charlynoudjalta@gmail.com',
        pass: 'Silvermoon06'
    }
});

let mailOptions = {
    from: 'charlynoudjalta@gmail.com',
    to: 'noudjaltac@gmail.com',
    subject: 'Test Email',
    text: 'This is a test email from Node.js'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Email sent: ' + info.response);
});