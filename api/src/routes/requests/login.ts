import { Read } from "../../controllers/read";

export const getUsers = async () => {
    const data = await Read("id, nome, email, telefone", "usuario");
    return data;
};

export const autenticarUsuario = async (req: any, res: any) => {
    const { email, telefone } = req.body;
    const users =  await getUsers();

    for (let i = 0; i < users.length; i++) {
        if (email === users[i].email && telefone === users[i].telefone) {
            return res.status(200).json({ existe: true, id: users[i].id });
        }
    }

    res.status(200).json({ existe: false });
}
