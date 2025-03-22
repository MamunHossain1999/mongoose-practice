import { creatUser } from './user.service';
import { NextFunction, Request, Response } from "express";

export const createUserController= async (req: Request, res: Response, next: NextFunction) => {
   const user = await creatUser();
   res.status(200).json({
    status: "success",
    data: user
   })

};

// route-> conrtoller ->service call dibe