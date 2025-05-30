import { Read } from "../../controllers/read";
import { Insert } from "../../controllers/insert";

export const getUsers = async (req: any, res: any) => {
    const data = await Read("*", "usuario");
    return res.status(200).json(data);
};

export const insertUsers = (req: any, res: any, fields: any[] | any, values: any[] | any) => {
    Insert(req, res, "usuario", fields, values);
}
