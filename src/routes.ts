import { Router } from 'express';
import * as playerController from './controllers/players-controllers';
import * as clubController from './controllers/clubs-controller';

export const router = Router();
router.get('/players', playerController.getPlayers);
router.post('/players', playerController.postPlayer);
router.delete('/players/:id', playerController.deletePlayer);
router.get('/players/:id', playerController.getPlayerById);
router.patch('/players/:id', playerController.updatePlayer);

router.get('/clubs', clubController.getClubs);