import User from "./user.model";

export const creatUser = async () => {
    const user = new User({
        id:'12e2dddds',
        role:"student",
        password: '23533',
        name:{
            firstName:' Md',
            middleName:'Mamun',
            lastName:'Hossain'
        },
        dataOfBirth:'11/9/2002',
        gender:'male',
        email: 'md.mamun.hossain.bj@gmail.com',
        contactNO: '01888494',
        emergencyContactNo: '084875837',
        pressentAddress: 'Panchagahr',
        permanentAddress:'panchagarh',
    });
    await user.save();
    console.log(user)
    return user;
}
