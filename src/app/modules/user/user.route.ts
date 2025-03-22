import express from "express";
import { creatUser } from "./user.service";
const router = express.Router();

router.get('/', creatUser);

export default router;