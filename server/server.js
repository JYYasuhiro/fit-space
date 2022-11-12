const express = require("express");
const db = require('../db/knex');
const path = require('path');

function setupServer() {
    const app = express();
    
    app.use(express.json());
    app.use(express.static(path.resolve(__dirname,'../client/dist')));

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
    //responds with the day of the week, week_table ID
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
    });
//responds with one exercise with instructions on how many sets and reps
//exercise_id is a number, so there's no exercise name return
    app.get('/workout/:id', async (req,res) => {
        const id = req.params.id;
        try {
            const table = await db('workout_table')
                .where('id', id)
                .select('*');
            res.status(200).send(table[0])
        } catch(err) {
            res.status(500).send(err)
        }
    })
    
    return app;
}

module.exports = setupServer;
