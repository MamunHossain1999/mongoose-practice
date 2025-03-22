import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";

//   creatin schema using interface
export const userSchema = new Schema<IUser>({
    id: {type: String, required:true, unique:true},
    role: {type:String, required:true},
    password: {type:String, required:true},
    name:{
        firstName:{type:String, required:true},
        middleName:{type:String,},
        lastName:{type:String, required:true},
    },
    dataOfBirth:{type:String},
    gender:{type:String, enum:['male', 'female']},
    email: {type: String},
    contactNo: {type:String,},
    emergencyContactNo: {type:String, required:true},
    pressentAddress:{type:String, required:true},
    permanentAddress: {type:String, required:true}
});
// creat a model
const User = model<IUser>('User', userSchema);

export default User;