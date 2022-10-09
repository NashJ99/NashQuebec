require("dotenv").config();
const express = require('express')
const path = require('node:path')
const bodyParser = require('body-parser')
const { MongoClient, ServerApiVersion } = require('mongodb');
const client = new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const app = express()
let posts = ''; 

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

async function main(){
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        databasesList = await client.db().admin().listDatabases();
 
        console.log("Databases:");
        databasesList.databases.forEach(db => console.log(` - ${db.name}`));

        posts = await client.db("CIS486Nash").collection("NashPapa").findOne();

        console.log(posts); 
        
        return posts; 
        // return posts.findOne();


    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

// main().catch(console.error);


app.get('/', async function (req, res) {
    // res.sendFile(path.join(__dirname, "index.html" )); 
    // res.send('Hello ' + userName + ' from Node/Express/Heroku');

    const result = await main().catch(console.error);

    console.log("results: ", result.title); 

    res.send(`results:  ${ result.title }`); 

    });



    

app.listen(process.env.PORT || 3000,
  () => console.log(`server is running on port: ${process.env.PORT}` ));




// app.set('view engine', 'ejs');
// app.get('/', function (req, res) {
    // res.sendFile(path.join(__dirname, "index.html" )); 
    // res.send('Hello ' + userName + ' from Node/Express/Heroku');

    // client.connect(err => {
    //     const collection = client.db("CIS486Nash").collection("NashPapa");
    //     console.log('connected!');
        // perform actions on the collection object

        // const result = collection.find( { title: "class"} ); //.toArray();
        // console.log(result.content);
           
        //    res.send(result.content);
        //    // client.close();
//    });

       // res.send(`Hello Express from inside my client connect f/n!`); 
// });

   

   // res.render('index',  {     }    );


// app.listen(process.env.PORT || 3000,
//  () => console.log(`server is running on port: ${process.env.PORT}` ));


 // const uri = "mongodb+srv://NashJDB1Oct:<NashJDB1Oct>@cis486nash.1xhuwj6.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   console.log('check');
//   client.close();
// });