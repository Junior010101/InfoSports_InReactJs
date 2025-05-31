import { Read } from "../../controllers/read";

export const getContacts = () => {
    const data = Read("usuario_id, telefone, nome_sobrenome, email, mensagem", "contato");
    return data;
}
