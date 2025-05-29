import { MysqlError } from "mysql";
import { db } from "../conexao";

export const Read = (_: any, res: any, selector: string, from: string) => {
  const query: string = `SELECT ${selector} from ${from}`;

  db.query(query, (error: MysqlError, data: any) => {
    if (error) {
      return res.json(error);
    } 
    else {
      return res.status(200).json(data);
    }
  });
};
