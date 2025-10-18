import { Router } from 'express';
import { getPlayers } from './controllers/players-controllers';

export const router = Router();
router.get('/players', getPlayers);
