// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) =>{
    if (err){
        return console.log('Unable to connect to MongoDB server', err);
    }
    console.log('Connected to MongoDB server');

    var db = client.db("teachersProfile");
   db.collection('TeachersList').find().toArray().then((docs) =>{
    console.log('TeachersList');
    console.log(JSON.stringify(docs, undefined, 2));
   }, (err) => {
     console.log('Unable to fetch TeacnersList', err);
 });

    // client.close();
});

