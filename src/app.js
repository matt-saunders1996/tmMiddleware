const express = require('express');
const nodemailer = require('nodemailer');
const helloWorld = require('./scheduledFunctions/helloWorld')
const mailInit = require('./scheduledFunctions/emailScheduler')

const app = express();
app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
    console.log(`listening on port ${app.get("port")}`);
})

helloWorld.initScheduledJobs()  
mailInit.initScheduledJobs()
