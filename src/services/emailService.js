const mailer = require('nodemailer');
const axios = require("axios");

const getTasks = async () => {
    const tasks = await axios.get("https://6341338f20f1f9d7996dfc67.mockapi.io/tasks");
    console.log(`tasks:${JSON.stringify(tasks.data)}`);
    return tasks;
}

const convertToTimestamp = (date) => {
    const dateObj = new Date(date);

    return Math.floor(dateObj.getTime() / 1000)
}

exports.sendMail = async () => {
    const {data: tasks} = await getTasks();
    console.log(tasks);

    const emailAddresses = [];
    tasks.map(task => {
        if(task.date){
            const timestamp = convertToTimestamp(task.date);

            if (timestamp <= Date.now() && task.email) {
                emailAddresses.push(task.email);
            }
        }

    })

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
        to: emailAddresses,  // list of receivers
        subject: 'overdue task',
        text: 'your task is overdue',
        html: '<b>Hey there! </b><br> you have an overdue task with taskmaster!<br/>'
    };

    transport.sendMail(mailData, function (err, info) {
        if (err)
            console.error(err)
        else
            console.log(info)
    })
}

