require("dotenv").config();
const express = require('express')
const path = require('node:path')
const bodyParser = require('body-parser')
const { MongoClient, ServerApiVersion } = require('mongodb')
const client = new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
const PORT = process.env.PORT || 3000
const app = express()

let posts = ''; 

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('public'))


MongoClient.connect(process.env.MONGO_URI, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected');
    //const db = client.db('NashPapa');
    // const quotesCollection = db.collection('Papacis486');

    databasesList = client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));


    app.get('/', async (req, res) => {
        db.collection('name').find().toArray()
          .then(results => {
            res.render('index.ejs', { name: results })
          })
          .catch(/* ... */)
      })
    
      app.post('/name', (req, res) => {
        quotesCollection.insertOne(req.body)
          .then(result => {
            res.redirect('/')
          })
          .catch(error => console.error(error))
      })
      app.post('/name', (req,res) => {
        console.log(req.body);
    })
    app.post('/updateTeam/:id', async (req, res) => {
        let result = await quotesCollection.findOneAndUpdate(
        {
            "_id": ObjectId(req.params.id)
        },
        {
          $set: {
            name: 'Justin Nash',
            topic: 'undecided'
            }
        }
      )
    })
    .then(result => {
        console.log(result);
        res.redirect('/');
    })
    .catch(error => console.error(error))
})
app.post('/deletename/:id', async (req, res) => 
{
    let result = await quotesCollection.findOneAndDelete( 
        {
          "_id": ObjectId(req.params.id)
        }
      )
      .then(result => {
        console.log(result); 
        res.redirect('/');
      })
      .catch(error => console.error(error))
    })


    app.listen(process.env.PORT || 3000 , 
        () => console.log("server running..."));
    // do not cross
    