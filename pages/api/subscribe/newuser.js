import { connectToDatabase } from "../../../lib/db";
export default async function newuser(request , response) {
    let status = 200;
    let Message= "Ok"
    const connection = await connectToDatabase().catch((err)=>{console.log(err);sucessState = false;errorMessage =err});
    let db = connection.db();
    let userAuthCollection = db.collection('subscribed-emails');
    const data = request.body;
    const {email} = data;
    let res = await userAuthCollection.findOne({email});
    if(res){
        Message = "You are already a member"
        status = 202
        response.status(status).json({"message":{Message}})
        return;
    }
    res = await userAuthCollection.insertOne({email}).catch((err)=>{
        status = 500
        Message = err
    });   
    response.status(status).json({"Message":{Message}});
    return;
}
