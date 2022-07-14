import dotenv from 'dotenv';
import express, {Application} from 'express';
import 'reflect-metadata';

dotenv.config();


export async function createApp(app: Application): Promise<Application> {
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));


    return app;
}


