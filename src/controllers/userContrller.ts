
import { Request,Response } from "express"
import * as userModal from "../models/userModel"

interface ExpressReqResTypes{
    req:Request
    res:Response
}

export const getUsers=({req,res}:ExpressReqResTypes):void=>{
    userModal.getUsers((err,result)=>{
        if (err) {
            res.status(500).json({ error: 'Failed to fetch users' });
        } else {
            res.json(result);
        }
    })
}


export const addUser=({req,res}:ExpressReqResTypes)=>{
    const {name,email} =req?.body;

    userModal.addUser(name,email,(err,result)=>{
        if (err) {
            res.status(500).json({ error: 'Failed to add user' });
        } else {

            res.status(201).json({ message: 'User added successfully',data:result});
        }
    })
}   