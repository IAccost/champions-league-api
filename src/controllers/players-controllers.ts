import { Request, Response } from 'express';
import * as service from '../services/players-service';
import { StatisticsModel } from '../models/statistics-model';

export const getPlayers = async (req: Request, res: Response) => {
    const HttpResponse = await service.getPlayerService();
    res.status(HttpResponse.statusCode).json(HttpResponse.body);
}   

export const getPlayerById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const httpResponse = await service.getPlayerByIdService(Number.isInteger(id) ? id : 1);
    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const postPlayer =  async (req: Request, res: Response) => {
    const bodyValue = req.body;
    const httpResponse = await service.createPlayerService(bodyValue);
    if (httpResponse) {
        res.status(httpResponse.statusCode).json(httpResponse.body);
    }
}

export const deletePlayer = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const httpResponse = await service.deletePlayerService(Number.isInteger(id) ? id : 0);
    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const updatePlayer = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const bodyValue: StatisticsModel= req.body;
    const httpResponse = await service.updatePlayerService(Number.isInteger(id) ? id : 0, bodyValue);
    res.status(httpResponse.statusCode).json(httpResponse.body);
    
}