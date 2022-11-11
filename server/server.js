const express = require("express");
const db = require('../db/knex');
const path = require('path');

function setupServer() {
    const app = express();
    
    app.use(express.json());
    app.use(express.static(path.resolve(__dirname,'../my-app/dist')));

    app.get('/hello', (req,res) => {
        res.status(200).send('🍎 successful test get endpoint')
    });
    return app;
}

module.exports = setupServer;
