const CronJob = require ("node-cron");
const emailer = require ("../services/emailService")

exports.initScheduledJobs = () => {
    const scheduledJob = CronJob.schedule("*/1 * * * *", ()=> {
        emailer.sendMail()
    })


    scheduledJob.start();
}