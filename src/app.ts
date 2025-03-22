import express, { Application, NextFunction, Request, Response } from "express"; // Correctly importing Request and Response types
import cors from "cors";
import { Schema, model } from "mongoose";

const app: Application = express();

// Using CORS middleware
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  // inserting a test data into mongodb
  // step 1: interface
  //step 2 : schema
  // step 3: model
  // step 4: database query
    res.send("Hello World!");
    next();

  // creating an interface
  interface IUser {
    id:string;
    role:"student";
    password: string;
    name:{
        firstName: string;
        middleName?:string;
        lastName:string;
    };
    dataOfBirth?:string;
    gender:"male" | "female";
    email?: string;
    contactNO: string;
    emergencyContactNo: string;
    pressentAddress: string;
    permanentAddress: string;
  };

//   creatin schema using interface
const userSchema = new Schema<IUser>({
    id: {type: String, require:true, unique:true},
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
    contactNO: {type:String, required:true},
    emergencyContactNo: {type:String, required:true},
    pressentAddress:{type:String, required:true},
    permanentAddress: {type:String, required:true}
});
// creat a model
const User = model<IUser>('User', userSchema);
const user = new User({
    id:'123456',
    role:"student",
    password: '23533',
    name:{
        firstName:' Md',
        middleName:'Mamun',
        lastName:'Hossain',
    },
    dataOfBirth:'11/9/2002',
    gender:'male',
    email: 'md.mamun.hossain.bj@gmail.com',
    contactNO: '01888494',
    emergencyContactNo: '084875837',
    pressentAddress: 'Panchagahr',
    permanentAddress:'panchagarh',
})

});

export default app;
