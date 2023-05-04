import { Router } from "express";
import { addItem, getFullData,deleteItem} from "./userController.js";

const user=Router();
user.get('/user', getFullData)
user.post('/add',addItem)
user.delete('/add/:id', deleteItem)

export default user;