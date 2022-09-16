import { connectToDatabase } from "../../../lib/db";
export default async function getData(req,res){
    const conn  = await connectToDatabase();
    const trendinCollection =  conn.db("Blogs").collection("Trending");
    let arr = await trendinCollection.find().sort({"_id":1}).toArray()
  }