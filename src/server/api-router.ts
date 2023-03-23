import express from 'express';
import cors from 'cors';

import { connectClient } from './db';

const router = express.Router();
router.use(cors());

router.get('/contests', async (req, res) => {
    // get the data from MongoDB
    const client = await connectClient();

    const contests = await client.collection("contests")
      .find()
      .toArray();

    res.send({ contests });
});

// router.get('/contest')

export default router;