import { request , response } from 'express';

export const loginUser = async (req: Request, res: Response) => {
    res.json(req.body);
}