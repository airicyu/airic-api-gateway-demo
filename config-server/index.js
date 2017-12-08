'use strict';
const YAML = require('yamljs');
const fs = require('fs');
const request = require('request');
const configServer = require('airic-api-gateway-config-server');


const configServerConfigYaml = YAML.load('./config-server-config.yaml');
configServer.setConfig(configServerConfigYaml)

/* Key sqlite store */
const sqlite3 = require('sqlite3').verbose();
const keyDB = new sqlite3.Database('./../key-server/gateway_key.db');
const keysSqliteDataStore = configServer.implementations.keysDataStore.keysSqliteDataStore;
keysSqliteDataStore.registerDB(keyDB);
configServer.setKeysDataStore(keysSqliteDataStore);

/* Key MySQL store */
/*
const mysql = require('mysql');
const pool  = mysql.createPool({
    connectionLimit : 50,
    host: "localhost",
    user: "root",
    password: "Password1",
    database: 'gateway_key'
});
    
const keysMysqlDataStore = configServer.implementations.keysDataStore.keysMysqlDataStore;
keysMysqlDataStore.registerConnectionPool(pool);
configServer.setKeysDataStore(keysMysqlDataStore);
*/



/* Key Mongo store */
/*const keysMongoDataStore = configServer.implementations.keysDataStore.keysMongoDataStore;

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const mongoUrl = 'mongodb://127.0.0.1:27017/gateway_key';
await new Promise(resolve => {
    MongoClient.connect(mongoUrl, function (err, database) {
        if (err) throw err;
        keysMongoDataStore.registerDB(database);
        resolve();
    });
});
configServer.setKeysDataStore(keysMongoDataStore);*/






/* config sqlite store */
const configDB = new sqlite3.Database('./api_config.db');
const configSqliteDataStore = configServer.implementations.configDataStore.configSqliteDataStore;
configSqliteDataStore.registerDB(configDB);
configServer.setConfigDataStore(configSqliteDataStore);


/* Config MySQL store */
/*const mysql = require('mysql');
const pool  = mysql.createPool({
    connectionLimit : 50,
    host: "localhost",
    user: "root",
    password: "Password1",
    database: 'api_config'
});
    
const configMysqlDataStore = configServer.implementations.configDataStore.configMysqlDataStore;
configMysqlDataStore.registerConnectionPool(pool);
configServer.setConfigDataStore(configMysqlDataStore);*/


/* Config Mongo store */
/* const configMongoDataStore = configServer.implementations.configDataStore.configMongoDataStore;

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const mongoUrl = 'mongodb://127.0.0.1:27017/api_config';
await new Promise(resolve=>{
    MongoClient.connect(mongoUrl, function(err, database) {
        if( err ) throw err;
        configMongoDataStore.registerDB(database);
        resolve();
    });
});
configServer.setConfigDataStore(configMongoDataStore);*/

configServer.run();

/*var ADMIN_TOKEN = configServerConfigYaml['admin-token'];
var hardcodeJsonConfig = require('./imports/test-import-json-config.json');
var hardcodeAppYaml = fs.readFileSync('./imports/petStore.yaml', 'utf8');*/

/* Config preload JSON memory store */

/*
new Promise((resolve, reject) => {
    request('http://localhost:3001/config/import', {
            method: 'POST',
            json: true,
            headers: {
                'id-key': ADMIN_TOKEN
            },
            body: hardcodeJsonConfig
        },
        function (error, response, body) {
            if (error) {
                reject(error);
            } else {
                resolve(body);
            }
        });
}).then(() => {
    return new Promise((resolve, reject) => {
        request('http://localhost:3001/config/workspaces/6ba955dde3044b6687af7b4d05a64920/apps/b84cdbefe8ab42d38df0aa415030c4a1/open-api-specs', {
                method: 'POST',
                headers: {
                    'id-key': 'd8745e9d03be41ad817a47176ade4dcc',
                    'content-type': 'text/plain'
                },
                body: hardcodeAppYaml
            },
            function (error, response, body) {
                if (error) {
                    reject(error);
                } else {
                    resolve(body);
                }
            });
    });
});
*/