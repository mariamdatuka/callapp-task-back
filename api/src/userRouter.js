import { Router } from "express";
import { addItem, getFullData,deleteItem, updateTable} from "./userController.js";

const user=Router();
user.get('/user', getFullData)
user.post('/add',addItem)
user.delete('/add/:id', deleteItem)
user.put('/add/:id', updateTable);

export default user;