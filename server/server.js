const express = require("express");
const db = require('../db/knex');
const path = require('path');

function setupServer() {
    const app = express();
    
    app.use(express.json());
    app.use(express.static(path.resolve(__dirname,'../my-app/dist')));

    app.get('/hello', async (req,res) => {
        res.status(200).send('🍎 successful test get endpoint')
   });
    //indicates what body part an exercise will be hitting, by exercise_type ID 
    app.get('/type/:id', async (req,res) => {
      const id = req.params.id;
      try{
        const table = await db('exercise_type')
            .where('id', id)
            .select('*');
        res.status(200).send(table[0].name)
      } catch(err) {
        res.status(500).send(err);
      }
    });
    //returns the day of the week, week_table ID
    app.get('/week/:id', async (req,res) => {
        const id = req.params.id;
        try {
            const table = await db('week_table')
                .where('id', id)
                .select('*')
                console.log(table[0].day);
            res.status(200).send(table[0].day);
        } catch(err) {
            res.status(500).send(err);
        }
    })
    
    return app;
}

module.exports = setupServer;
