// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017', (err, client) =>{
    if (err){
        return console.log('Unable to connect to MongoDB server', err);
    }
    console.log('Connected to MongoDB server');

    // var db = client.db("teachersProfile");
    // db.collection('TeachersList').insertMany([
    //     {
    //         Name: "Joseph",
    //         Subject: "Maths",
    //         House: "Red"
    //     }, {
    //         Name: "Bisola",
    //         Subject: "Art",
    //         House: "White"
    //     }, {
    //         Name: "Edidiong",
    //         Subject: "Account",
    //         House: "Gren"
    //     }, {
    //         Name: "Christian",
    //         Subject: "CRK",
    //         House: "Purple"
    //     }, {
    //         Name: "Mickael",
    //         Subject: "Physics",
    //         House: "Yellow"
    //     }, {
    //         Name: "Bisola",
    //         Subject: "Art",
    //         House: "White"
    //     }, {
    //         Name: "Princess",
    //         Subject: "literature",
    //         House: "pink"
    //     }, {
    //         Name: "Ucha",
    //         Subject: "Biology",
    //         House: "Blue"
    //     }, {
    //         Name: "Femi",
    //         Subject: "Sport",
    //         House: "Brown"
    //     }, {
    //         Name: "Ruby",
    //         Subject: "food & Nutrition",
    //         House: "Orange"
    //     }

        

    // ], (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    client.close();
});

