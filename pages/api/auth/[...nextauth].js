import CredentialsProvider from "next-auth/providers/credentials"
import NextAuth from "next-auth"
import { verifyPassword } from "../../../lib/cryptLib";
import { connectToDatabase } from "../../../lib/db"
export default NextAuth(
{ session:{
  jwt:true
},
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        const client = await connectToDatabase();
        const userCollection = client.db().collection('user-auth');
        const userData = await userCollection.findOne({$or:[{"email":credentials.identifier},{"username":credentials.identifier}]})
        let result = null;
        if (userData) {
            result = await verifyPassword(credentials.password,userData.password);
        }     
        if (result === true) {
          client.close();
          const user = {"email":userData.email,"name":userData.username};
          console.log(user);
          return user;
        }else{
          client.close()
            throw new Error("Email or password submitted are wrong")
        }
      }
    })
  ]}
)