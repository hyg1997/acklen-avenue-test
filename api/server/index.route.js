import express from 'express';
import { APIsuccess } from './helpers/API-responses';

const router = express.Router();

router.get('/test', (req, res) =>
  res.status(200).json(APIsuccess(200, { message: 'Hey it works!' }))
);

export default router;