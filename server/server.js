const express = require("express");
const db = require('../db/knex');
const path = require('path');

function setupServer() {
    const app = express();
    
    app.use(express.json());
    app.use(express.static(path.resolve(__dirname,'../my-app/dist')));

    app.get('/hello', async (req,res) => {
        res.status(200).send('🍎 successful test get endpoint')
   
    //indicates what body part an exercise will be hitting, by exercise_type ID 
    app.get('/:id/type', async (req,res) => {
      const id = req.params.id;
      try{
        const table = await db('exercise_type').where('id', id).select('*')
        console.log(table);
        res.status(200).send(table[0].name)
      } catch(err) {
        res.status(500).send(err);
      }
    })
    });
    return app;
}

module.exports = setupServer;
