import express from 'express';
import { getUsers, addUser } from "../controllers/userContrller";

const router = express.Router();

router.get('/users',(req,res)=>getUsers({req,res}));
router.post('/users',(req,res)=>addUser({req,res}));

export {router};