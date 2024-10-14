


import { FieldPacket, QueryError } from "mysql2";
import {db} from "../config/db";



interface User {
    name: string;
    email: string;
}

export const getUsers = (callback: (err: Error | null, results?: any) => void): void => {
    const query = 'SELECT * FROM users';
    db.query(query, callback);
};

export  const addUser = (name: string, email: string, callback: (err: Error | null, result?: any) => void): void => {
    const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
    db.query(query, [name, email], callback);
};
