const { Worker } = require('bullmq');
const Redis = require('ioredis');

const connection = new Redis({
  host: 'localhost',  
  port: 6379,        
  maxRetriesPerRequest: null,
});

const sendEmail = (ms) => new Promise((res,rej) => setTimeout(() => res() , 2000));
const worker = new Worker("email-queue",async (job) => {
  console.log(`message received at id : ${job.id}`);
  console.log(`sending email to ${job.data.email}`);
  await sendEmail();
  console.log("email sent!");
}, {connection});

