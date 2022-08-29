import { connectToDatabase } from "../../../lib/db";
export default async function isUnique(request,response){
    const {username} = request.body;
    const client = await connectToDatabase();
    //errowHandling
    const result = await client.db().collection('user-auth').findOne({username});
    if (!result){
        response.status(200).json({"message":"true"})
    }else{
        response.status(200).json({"message":"false"})
    }
}