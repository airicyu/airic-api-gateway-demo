'use strict';

const YAML = require('yamljs');

const keyServer = require('airic-api-gateway-key-server');

const keyServerConfigYaml = YAML.load('./key-server-config.yaml');
keyServer.setConfig(keyServerConfigYaml);

/* Key sqlite store */
const sqlite3 = require('sqlite3').verbose();
const keyDB = new sqlite3.Database('./gateway_key.db');
const keysSqliteDataStore = keyServer.implementations.keysDataStore.keysSqliteDataStore;
keysSqliteDataStore.registerDB(keyDB);
keyServer.setKeysDataStore(keysSqliteDataStore);

/* Key MySQL store */
/*const mysql = require('mysql');
const pool  = mysql.createPool({
    connectionLimit : 50,
    host: "localhost",
    user: "root",
    password: "Password1",
    database: 'gateway_key'
});

const keysMysqlDataStore = keyServer.implementations.keysDataStore.keysMysqlDataStore;
keysMysqlDataStore.registerConnectionPool(pool);
keyServer.setKeysDataStore(keysMysqlDataStore); */

keyServer.run();
