import { Insert } from "../../controllers/insert";
import { Read } from "../../controllers/read";

export const getContacts = (id: number) => {
    const data = Read(`telefone, nome_sobrenome, email, mensagem`, `contato where usuario_id = ${id}`);
    return data;
}

export const insertContacts = (req: any, res: any, fields: any[] | any, values: any[] | any) => {
    Insert(req, res, "contato", fields, values);
}
