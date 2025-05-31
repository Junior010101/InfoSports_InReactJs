import express from "express";
import { autenticarUsuario, getUsers } from "./requests/login";
import { insertUsers } from "./requests/registro";
import { deleteUsers } from "./requests/registro";
import { getContacts } from "./requests/contato";

const router = express.Router();

//checar contatos
router.get('/contatos', async (req, res) => {
    const contacts = await getContacts();
    res.status(200).json(contacts);
});

//Checar usuarios
router.get('/usuarios', async (req, res) => {
    const users =  await getUsers();
    res.status(200).json(users);
});

router.post('/login', async (req: any, res: any) => {
    autenticarUsuario(req, res);
});

//Adicionar usuario.
const campos: string[] = [
    "nome",
    "email",
    "telefone"
]

router.post('/usuarios', async (req, res) => {
    const valores = campos.map(campo => req.body[campo]);
    await insertUsers(req, res, campos, valores);
});

//Remover Usuario
router.delete('/usuarios/:id', async (req, res) => {
    const id: number = Number(req.params.id);
    await deleteUsers(req, res, id);
})

export default router;
