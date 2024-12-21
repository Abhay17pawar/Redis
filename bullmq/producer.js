const { Queue } = require('bullmq');

const notificationQueue = new Queue('email-queue');

async function init() {
    const res = await notificationQueue.add("email to abhay", {
        email : "abhaypawar0817@gmail.com",
        subject : "greetings",
        body : "hey there !"
    });
    console.log(res.id);
}

init(); 