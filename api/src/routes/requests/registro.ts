import { Read } from "../../controllers/read";

export const getUsers = (req: any, res: any) => {
    Read(req, res, "*", "usuario");
};
