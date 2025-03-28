  // creating an interface
  export interface IUser {
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
    contactNo: string;
    emergencyContactNo: string;
    pressentAddress: string;
    permanentAddress: string;
  };