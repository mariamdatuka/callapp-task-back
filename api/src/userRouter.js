import { Router } from "express";
import { addItem, getFullData} from "./userController.js";

const user=Router();
user.get('/user', getFullData)
user.post('/add',addItem)


export default user;