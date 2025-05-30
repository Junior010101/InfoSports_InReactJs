import { db } from "../conexao";
import { MysqlError } from "mysql";

export const Read = (selector: string, from: string): Promise<any> => {
  return new Promise((resolve, reject) => {

    const query = `SELECT ${selector} FROM ${from};`;

    db.query(query, (error: MysqlError | null, data: any) => {
      
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};
