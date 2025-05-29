import express from "express";
import { getUsers } from "./requests/registro";

const router = express.Router();

router.get('/', getUsers);

export default router;
