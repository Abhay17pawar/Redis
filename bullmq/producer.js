const { Queue } = require('bullmq');  // queue class from bullmq

const notificationQueue = new Queue('email-queue');  // all jobs added to this queue will be processed by workers listening on this queue

async function init() {
    const res = await notificationQueue.add("email to abhay", {
        email : "abhaypawar0817@gmail.com",
        subject : "greetings",
        body : "hey there !"
    });
    console.log(res.id);
}

init(); 