import * as express from 'express';
import tagRouter from '../modules/tag/tag.router';
import config from '../config/config';

const router = express.Router();

router.use(express.json({ limit: `${config.requestBodyMaxSize}mb` }));

router.use('/tags', tagRouter);

export default router;
