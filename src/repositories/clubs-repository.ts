import { ClubModel } from '../models/club-model';
import fs from 'fs/promises';
const database: Promise<ClubModel[]> = readFile();
async function readFile() {
    return fs.readFile('./src/data/clubs.json', 'utf-8')
        .then((data) => JSON.parse(data) as ClubModel[]);
}
export const findAllClubs = async (): Promise<ClubModel[]> => {
    return await database;
}