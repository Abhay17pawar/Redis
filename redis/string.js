const createRedisConnection = require('./client');

async function init() {
    try {
        const client = await createRedisConnection();
        await client.set('user:10','github');   // setting the key and it's value 
        const result = await client.get('user:10');  // getting the value of that key 
        await client.set('user:10','github-updated');  // updating the value of the key 
        const result2 = await client.get('user:10'); // getting the updated value of that key
        console.log(result);  
        console.log(result2);
        await client.del('user:10');  // deleting the key 
        } catch (error) {
        console.error('Error while getting user data from Redis:', error);
    }
}

init();
