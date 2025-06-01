import express from "express";
import { autenticarUsuario, getUsers } from "./requests/login";
import { insertUsers } from "./requests/registro";
import { deleteUsers } from "./requests/registro";
import { getContacts, insertContacts } from "./requests/contato";

const router = express.Router();
let id = 0;

//checar contatos
router.get('/contatos', async (req: any, res: any) => {
    if (isNaN(Number(id))) {
        return res.status(400).json({ error: 'ID inválido' });
    }

    const contacts = await getContacts(Number(id));
    res.status(200).json(contacts);
});

//Checar usuarios
router.get('/usuarios', async (req, res) => {
    const users =  await getUsers();
    res.status(200).json(users);
    id = Number(req.query.id);
});

router.post('/login', async (req: any, res: any) => {
    await autenticarUsuario(req, res);
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

//adicionar contato
const campos2: string[] = [
    "telefone",
    "nome_sobrenome",
    "email",
    "mensagem",
    "usuario_id"
]

router.post('/contatos', async (req, res) => {
    const valores = campos2.map(campo => req.body[campo]);
    valores.push(Number(id));

    const valores2 = valores.filter(item => item !== undefined);

    await insertContacts(req, res, campos2, valores2);
});

//Remover Usuario
router.delete('/usuarios/:id', async (req, res) => {
    const id: number = Number(req.params.id);
    await deleteUsers(req, res, id);
})

export default router;
