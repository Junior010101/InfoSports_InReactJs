import { Request, Response } from 'express';
import { db } from '../conexao';
import { Read } from './read';

// Validação simples para nomes de campos e tabelas
const isSafeIdentifier = (str: string) => /^[a-zA-Z0-9_]+$/.test(str);

export const Insert = async (req: Request, res: Response, t_name: string, field: string | string[], values: any[]) => {
    try {
        const fields = Array.isArray(field) ? field : [field];

        // Validação para evitar SQL Injection
        if (!isSafeIdentifier(t_name) || !fields.every(isSafeIdentifier)) {
            return res.status(400).json({ error: 'Nome de tabela ou campo inválido.' });
        }

        // (opcional) Verificar se a tabela existe ou possui os campos — aqui está só imprimindo
        const existingData = await Read('*', t_name);
        console.log('Dados existentes:', existingData);

        const placeholders = fields.map(() => '?').join(', ');
        const query = `INSERT INTO \`${t_name}\` (${fields.map(f => `\`${f}\``).join(', ')}) VALUES (${placeholders})`;

        db.query(query, values, (error, result) => {
            if (error) {
                console.error('Erro no insert:', error);
                return res.status(500).json({ error: 'Erro ao inserir', details: error });
            } 
            else {
                return res.status(200).json({ success: true, result });
            }
        });
    }
    catch (error) {
        console.error('Erro inesperado:', error);
        res.status(500).json({ error: 'Erro interno no servidor' });
    }
};
