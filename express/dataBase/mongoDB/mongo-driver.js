import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017"); //!new instance

await client.connect(); //! server creation from instance

const db = client.db("mongodb_nodejs_db"); //! databse creation
const userCollection = db.collection("users"); //! collection creation

userCollection.insertOne({ name: "Aniket", age: 21 }); //! insert data in collection
