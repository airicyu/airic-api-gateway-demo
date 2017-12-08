'use strict';

const statServer = require('airic-api-gateway-stat-server');

module.exports = statServer;

const YAML = require('yamljs');
const statServerConfigYaml = YAML.load('./stat-server-config.yaml');

statServer.setConfig(statServerConfigYaml);

/* Stat sqlite store */
const sqlite3 = require('sqlite3').verbose();
const statDB = new sqlite3.Database('./gateway_stat.db');
const sqliteDataStore = statServer.implementations.dataStore.sqliteDataStore;
sqliteDataStore.registerDB(statDB);
statServer.setDataStore(sqliteDataStore);

/* Stat MySQL store */
/*
const mysql = require('mysql');
const pool  = mysql.createPool({
    connectionLimit : 50,
    host: "localhost",
    user: "root",
    password: "Password1",
    database: 'gateway_stat'
});

const mysqlDataStore = statServer.implementations.dataStore.mysqlDataStore;
mysqlDataStore.registerConnectionPool(pool);
statServer.setDataStore(mysqlDataStore);*/

//const memoryDataStore = require('./db/memory-data-store').dataStore;
//statServer.setDataStore(memoryDataStore);

statServer.run();