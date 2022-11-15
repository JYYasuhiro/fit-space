const express = require("express");
const db = require('../db/knex');
const path = require('path');
const cors = require('cors')

function setupServer() {
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(express.static(path.resolve(__dirname,'../client/dist')));

    app.get('/hello', (req,res) => {
      try{
        res.status(200).send('🍎 successful test get endpoint')
      } catch(err) {
        res.status(500).send('could not GET')
      }  
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

    //responds with exercise name only, based off ID number 
    app.get('/exercise/:id', async (req, res) => {
        const id = req.params.id;
        try {
            const table = await db('exercise_table')
                .where('id', id)
                .select('exercise_name')
                console.log(table);
            res.status(200).send(table[0].exercise_name);
      } catch(err) {
          res.status(500).send(err);
      }
    })

    //responds with one exercise with instructions on how many sets and reps
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
//responds with whole workout session for the day, usually with 3-4 exercises
    app.get('/workout/day/:id', async (req,res) => {
      const id = req.params.id;
      try {
          const table = await db('workout_table')
              .where('day_id', id)
              .select('*');
              console.log(table);
          res.status(200).send(table[0])
      } catch(err) {
          res.status(500).send(err)
      }
  })
    
    return app;
}

module.exports = setupServer;
