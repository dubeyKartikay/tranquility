import { connectToDatabase } from "../../../lib/db";
import { hashPassword } from "../../../lib/cryptLib";
export default async function createUser(request,response){
    let sucessState = true;
    let errorMessage= ""
    const connection = await connectToDatabase().catch((err)=>{console.log(err);sucessState = false;errorMessage =err});
    let db = connection.db();
    let userAuthCollection = db.collection('user-auth');
    const data = request.body;
    const {email,username , password} = data;
    const res = await userAuthCollection.findOne({email});
    if (res) {
        sucessState = false
        response.status(422).json({"message":"Email Taken"})
        // console.log(response);
        return;
    }
    const hashedPassword = await hashPassword(password);

    await userAuthCollection.insertOne({email,username,"password":hashedPassword}).catch((err)=>{console.log(err);sucessState = false;errorMessage =err});
    if(sucessState){
        response.status(201).json({"message":"Created User"})
    }else{
        response.status(400).json({"message":errorMessage})
        
    }
    return;

}