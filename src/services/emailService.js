const mailer = require('nodemailer');

exports.sendMail = () => {
    const transport = mailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "4ed500168a8a9c",
            pass: "21be7b91e296f0"
        }
    });
    const mailData = {
        from: 'taskmanager@gmail.com',  // sender address
        to: 'matt.jsaunds@outlook.com, matt.jsaunds@gmail.com',   // list of receivers
        subject: 'Sending Email using Node.js',
        text: 'That was easy!',
        html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer<br/>'
    };

    transport.sendMail(mailData, function (err, info) {
        if (err)
            console.error(err)
        else
            console.log(info)
    })
}

