const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient


MongoClient.connect('mongodb+srv://dotevent:dotevent@cluster0.unbji.mongodb.net/test?authSource=admin&replicaSet=atlas-nfgypw-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true', (err, client) => {
    console.log('connected');
    const db = client.db('polkadot');
    
    app.get('/locations', async function(req, res) {
        const locations = await db.collection('locations').find().toArray();
        res.send({
            data: locations
        })
      })

      app.get('/names', async function(req, res) {
         const names = await db.collection('names').find().toArray();
         res.send({
             data: names
         })
       })

       app.get('/cards', async function(req, res) {
         const cards = await db.collection('cards').find().toArray();
         res.send({
             data: cards
         })
       })

  })



app.listen(3200, function() {
    console.log('listening on 3200')
  })