const createRedisConnection = require('./client');

async function init() {
    try {
        const client = await createRedisConnection();
        // using redis as queues 
        await client.lPush('bikes','bike:1');  
        await client.lPush('bikes','bike:2');
        // the queue will be like this --> bike:2 bike:1
        const res1 = await client.rPop('bikes');
        // res1 --> bike:1 
        console.log(res1);
        } catch (error) {
        console.error('Error while getting user data from Redis:', error);
    }
}

init();
