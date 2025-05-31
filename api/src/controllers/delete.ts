import { Request, Response } from 'express';
import { db } from '../conexao';

const isSafeIdentifier = (str: string) => /^[a-zA-Z0-9_]+$/.test(str);

export const Delete = async (req: Request, res: Response, t_name: string, conditionField: string, conditionValue: any) => {
    try {
        // Validação para evitar SQL Injection
        if (!isSafeIdentifier(t_name) || !isSafeIdentifier(conditionField)) {
            return res.status(400).json({ error: 'Nome de tabela ou campo inválido.' });
        }

        const query = `DELETE FROM \`${t_name}\` WHERE \`${conditionField}\` = ?`;

        db.query(query, [conditionValue], (error, result) => {
            if (error) {
                console.error('Erro ao deletar:', error);
                return res.status(500).json({ error: 'Erro ao deletar', details: error });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({ error: 'Nenhum registro encontrado para deletar' });
            }

            return res.status(200).json({ success: true, result });
        });
    } catch (error) {
        console.error('Erro inesperado:', error);
        res.status(500).json({ error: 'Erro interno no servidor' });
    }
};
