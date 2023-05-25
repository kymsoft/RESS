import mongoose from "mongoose";

const AuthSchema = new mongoose.Schema(
   {
      username: {
         type: String,
         required: true
      },
      password: {
         type: String,
         required: true
      }
   }
);

const Auth=mongoose.model("Auth", AuthSchema);
export default Auth;