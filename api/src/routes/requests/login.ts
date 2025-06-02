import { Read } from "../../controllers/read";
import jwt from "jsonwebtoken";

const SECRET = "1234"; // Idealmente coloque em uma variável de ambiente

export const getUsers = async () => {
    const data = await Read("id, nome, email, telefone", "usuario");
    return data;
};

export const autenticarUsuario = async (req: any, res: any) => {
    const { email, telefone } = req.body;
    const users = await getUsers();

    for (let i = 0; i < users.length; i++) {
        if (email === users[i].email && telefone === users[i].telefone) {
            const token = jwt.sign({ id: users[i].id }, SECRET, { expiresIn: '1h' });

            return res.status(200).json({
                existe: true,
                token, // envia o JWT ao cliente
                nome: users[i].nome,
                id: users[i].id
            });
        }
    }

    res.status(200).json({ existe: false });
}
