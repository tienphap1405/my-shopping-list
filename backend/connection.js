const {MongoClient} = require("mongodb")
const uri = "mongodb+srv://sjfdik:sjfdik@cluster0.yqwte.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);
let db;
async function run() {
    try {
        await client.connect();
        console.log("Pinged, successfully connected to mongoDB!");
        let db = client.db("ShoppingList");
    } catch(err){
        console.error(err);
        throw err;
    }
}



module.exports = run;