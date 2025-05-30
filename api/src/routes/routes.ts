import express from "express";
import { getUsers } from "./requests/registro";
import { insertUsers } from "./requests/registro";

const router = express.Router();

router.get('/usuarios', getUsers);

const campos: string[] = [
    "nome",
    "email",
    "telefone"
]

router.post('/usuarios', async (req, res) => {
    const valores = campos.map(campo => req.body[campo]);
    await insertUsers(req, res, campos, valores);

});

export default router;
