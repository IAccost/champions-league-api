import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";
import fs from 'fs/promises';

const loadDatabase = async () => {
  const data = await fs.readFile('./src/data/players.json', 'utf-8');
  const database: PlayerModel[] = JSON.parse(data) as PlayerModel[];
  return database;
};

const db: Promise<PlayerModel[]> = loadDatabase();

export const getAllPlayers = async (): Promise<PlayerModel[]> => {
  return db;
}

export const findPlayerById = async (id: number): Promise<PlayerModel | null> => {
    const player = (await db).find(player => player.id === id);
    return player || null;
}


export const insertPlayer = async (player: PlayerModel) => {
    (await db).push(player);
}

export const deletePlayerById = async (id: number): Promise<boolean> => {
    const index = (await db).findIndex(player => player.id === id);
    if (index !== -1) {
        (await db).splice(index, 1);
        return true;
    }
    return false;
}

export const findAndModifyPlayer = async (id: number, statistics: StatisticsModel) => {
  const playerIndex = (await db).findIndex(player => player.id === id);
  if (playerIndex !== -1) {
    const player = (await db)[playerIndex];
    if (player) {
      player.statistics = statistics;
    }
    return (await db)[playerIndex];
  }
}