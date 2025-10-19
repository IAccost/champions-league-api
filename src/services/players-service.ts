import * as HttpResponse from "../utils/http-helper";
import  * as PlayerRepository from "../repositories/players-repository";
import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";

export const getPlayerService = async () => {
    const data = await PlayerRepository.getAllPlayers();
    let response = null;
    if (data){
        response = await HttpResponse.ok(data);
    }else{
        response = await HttpResponse.noContent();
    }
    

    return response;
}

export const getPlayerByIdService = async (id: number) => {
    const data = await PlayerRepository.findPlayerById(id);
    let response = null;
    if (data) {
        response = await HttpResponse.ok(data);
    } else {
        response = await HttpResponse.noContent();
    }
    return response;
}

export const createPlayerService = async (player: PlayerModel) => {
    if(player !== undefined && Object.keys(player).length !== 0){
        await PlayerRepository.insertPlayer(player);
        return HttpResponse.created();
    }else{
        return HttpResponse.badRequest("Invalid player data");
    }
}

export const deletePlayerService = async (id: number) => {
    let response = null;
    const wasDeleted = await PlayerRepository.deletePlayerById(id);
    if (wasDeleted) {
        response = await HttpResponse.ok({ message: "Player deleted successfully" });
    } else {
        response = await HttpResponse.notFound("Player not found");
    }
    return response;
}

export const updatePlayerService = async (id: number, statistics: StatisticsModel) => {
    const response = await PlayerRepository.findAndModifyPlayer(id, statistics);
    if (response) {
        return HttpResponse.ok(response);
    } else {
        return HttpResponse.notFound("Player not found");
    }
}