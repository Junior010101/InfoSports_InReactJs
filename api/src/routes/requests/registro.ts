import { Insert } from "../../controllers/insert";
import { Delete } from "../../controllers/delete";

export const insertUsers = (req: any, res: any, fields: any[] | any, values: any[] | any) => {
    Insert(req, res, "usuario", fields, values);
};

export const deleteUsers = (req: any, res: any, id: number) => {
    Delete(req, res, "usuario", "id", id);
};
