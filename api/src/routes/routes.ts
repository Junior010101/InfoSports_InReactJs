import express from "express";
import { autenticarUsuario, getUsers } from "./requests/login";
import { insertUsers } from "./requests/registro";
import { deleteUsers } from "./requests/registro";
import { deleteContacts, getContacts, insertContacts } from "./requests/contato";
import { autenticarToken } from "./authMiddleware"; // ajuste o caminho se necessário

const router = express.Router();

//checar contatos
router.get('/contatos', autenticarToken, async (req: any, res: any) => {
  const contacts = await getContacts(req.usuarioId);
  res.status(200).json(contacts);
});

//Checar usuarios
router.get('/usuarios', async (req, res) => {
    const users =  await getUsers();
    res.status(200).json(users);
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
router.post('/contatos', autenticarToken, async (req: any, res: any) => {
  const campos2 = [
    "telefone",
    "nome_sobrenome",
    "email",
    "mensagem",
    "usuario_id"
  ];

  const valores = campos2.map(campo => req.body[campo]);
  valores.push(req.usuarioId);

  const valores2 = valores.filter(item => item !== undefined);
  await insertContacts(req, res, campos2, valores2);
});

//Remover Usuario
router.delete('/usuarios/:id', async (req, res) => {
    const id: number = Number(req.params.id);
    await deleteUsers(req, res, id);
})

//Remover contato
router.delete('/contatos/:id', autenticarToken, async (req: any, res: any) => {
  const contactId: number = Number(req.params.id);
  await deleteContacts(req, res, contactId);
});

export default router;
