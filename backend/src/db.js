import { MongoClient } from "mongodb";
let db; 
async function connectToDB(cb){
    const url ="mongodb+srv://bhushan:bhushan@bhushan123.oj5yl8p.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(url);
    await client.connect();
    db = client.db("project1");
    cb();
}
export { connectToDB,db};