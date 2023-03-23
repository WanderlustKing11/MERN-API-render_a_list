import express from 'express';
import os from 'node:os';

import config from "./config";
import apiRouter from './api-router'
import serverRender from './render';

const server = express();

server.use(express.static('dist'));

server.set('view engine', 'ejs');

// defining our route to api-router
server.use('/api', apiRouter);

server.get("/", async (req, res) => {
    const { initialMarkup, initialData } = await serverRender();
    res.render('index', {
        initialMarkup,
        initialData,
    });
});

server.listen(config.PORT, config.HOST, () => {
    console.info(
        `Express server is listening at ${config.SERVER_URL}\n`,
        `Free Mem: ${os.freemem() / 1024 / 1024}`
    );
});