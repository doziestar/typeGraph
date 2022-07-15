import dotenv from "dotenv";
import express, {Application} from 'express';
import 'reflect-metadata';
import {buildSchema} from "type-graphql";
import {ApolloServer} from "apollo-server-express";
import {
    ApolloServerPluginLandingPageGraphQLPlayground,
    ApolloServerPluginLandingPageProductionDefault
} from "apollo-server-core";
import {resolvers} from "./resolver";
import helmet from "helmet";
// @ts-ignore
import morgan from "morgan";
import {connect} from "./utils/mongo";


dotenv.config();


export async function createApp(app: Application): Promise<Application> {
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(helmet());
    app.use(morgan('dev'));

    const schema = await buildSchema({
        resolvers,
        // authChecker
    })


    const server = new ApolloServer({
        schema,
        context: (ctx) => {
            return {
                req: ctx.req,
                res: ctx.res,
                ctx: ctx
            }
        },
        plugins: [
            process.env.NODE_ENV === 'production' ? ApolloServerPluginLandingPageProductionDefault()
                :
                ApolloServerPluginLandingPageGraphQLPlayground()

        ]
    })
    await server.start();
    // @ts-ignore
    server.applyMiddleware({app, cors: false});


    return app;
}


createApp(express()).then(app => {
    app.listen(process.env.PORT || 3000, async () => {
        console.log(`Server is listening on port ${process.env.PORT || 3000}`);
        await connect();
    });
}).catch(err => {
    throw new Error(err.message);
})
