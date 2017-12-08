'use strict';

const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        console.log(`cluster.fork() ${i}`);
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
} else {
    (async function () {
        //Gateway module
        const apiGateway = require('airic-api-gateway');

        /* Quota service with redis implementation */
        /*const redis = require("redis");
        const redisClient = redis.createClient({
            host: "127.0.0.1",
            port: 6379
        });
        const redisQuotaService = implementations.quotaService.redisQuotaService;
        redisQuotaService.setClient(redisClient);
    
        apiGateway.registerQuotaService(redisQuotaService);*/



        /* Quota service with mongo implementation */
        /* const mongoQuotaService = implementations.quotaService.mongoQuotaService;

        const mongodb = require('mongodb');
        const MongoClient = mongodb.MongoClient;
        const mongoUrl = 'mongodb://127.0.0.1:27017/api_quotas?maxPoolSize=50';
        await new Promise(resolve => {
            MongoClient.connect(mongoUrl, function (err, database) {
                if (err) throw err;
                mongoQuotaService.registerDB(database);
                resolve();
            });
        });
        apiGateway.registerQuotaService(mongoQuotaService);*/

        apiGateway.run();

    })().then();

    console.log(`Worker ${process.pid} started`);
}