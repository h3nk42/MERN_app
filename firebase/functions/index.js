const mongoose = require('mongoose');
const express = require('express');
let cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const Data = require('./data');
const readline = require('readline')
const functions = require('firebase-functions')

const app = express()
const dbRoute =
    `mongodb+srv://Neekh:${'Neekh123'}@cluster0.cmyhk.mongodb.net/Cluster0?retryWrites=true&w=majority`;
app.use(cors());

app.get('/', (req, res) => {

    const date = new Date();
    const hours = (date.getHours() % 12) + 1;  // London is UTC + 1hr;
    res.send(`
    <!doctype html>
    <head>
      <title>Time</title>
      <link rel="stylesheet" href="/style.css">
      <script src="/script.js"></script>
    </head>
    <body>
      <p>In London, the clock strikes:
        <span id="bongs">${'BONG '.repeat(hours)}</span></p>
      <button onClick="refresh(this)">Refresh</button>
    </body>
  </html>`);
});


app.get('/api', (req, res) => {
    mongoose.connect(dbRoute, {useUnifiedTopology: true, useNewUrlParser: true})
        .then( res => {})
        .catch(error => {console.log(error)
            process.exit()
        }).then( () => {

        let db = mongoose.connection;

        Data.find((err, data) => {
            if (err) {
                return res.json({success: false, error: err});

            } else {
                return res.json({success: true, data: data});
            }
        })
    })
});

app.post('/api/updateData', (req, res) => {
    mongoose.connect(dbRoute, {useUnifiedTopology: true, useNewUrlParser: true})
        .then( res => {})
        .catch(error => {console.log(error)
            process.exit()
        }).then( () => {

        let db = mongoose.connection;
        const {id, update} = req.body;
        Data.findByIdAndUpdate(id, update, (err) => {
            if (err) return res.json({success: false, error: err});
            return res.json({success: true});
        });
    });
});


app.delete('/api/deleteData', (req, res) => {
    mongoose.connect(dbRoute, {useUnifiedTopology: true, useNewUrlParser: true})
        .then( res => {})
        .catch(error => {console.log(error)
            process.exit()
        }).then( () => {


        const {id} = req.body;
        Data.findByIdAndRemove(id, (err) => {
            if (err) return res.send(err);
            return res.json({success: true});
        });
    })
});

app.post('/api/putData', (req, res) => {
    mongoose.connect(dbRoute, {useUnifiedTopology: true, useNewUrlParser: true})
        .then( res => {})
        .catch(error => {console.log(error)
            process.exit()
        }).then( () => {

        let data = new Data();

        const {id, message} = req.body;

        if ((!id && id !== 0) || !message) {
            return res.json({
                success: false,
                error: 'INVALID INPUTS',
            });
        }
        data.message = message;
        data.id = id;
        data.save((err) => {
            if (err) return res.json({success: false, error: err});
            return res.json({success: true});
        });
    })
});

exports.app = functions.https.onRequest(app);