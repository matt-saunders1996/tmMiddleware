const CronJob = require ("node-cron");

exports.initScheduledJobs = () => {
    const scheduledJob = CronJob.schedule("*/1 * * * *", ()=> {
        console.log("ell ello ello  world");
    })


    scheduledJob.start();
}