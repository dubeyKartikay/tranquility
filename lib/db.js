import {MongoClient} from "mongodb";
export async function connectToDatabase(){
    const connection = await MongoClient.connect("mongodb+srv://Kartikay5212854:JfeR05AyfZvaZXI1@cluster0.xbbf81v.mongodb.net/auth?retryWrites=true&w=majority")
    return connection;
}