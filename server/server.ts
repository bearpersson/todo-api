import path from 'path';
import http from 'http';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import TodoApp from './src/app';

dotenv.config({ path: path.resolve('config.env') });

const start = () => {
    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use('/', TodoApp);

    http.createServer(app).listen(process.env.SERVER_PORT);

    console.info(`Server started on: ${process.env.SERVER_PORT}`);
};

start();
