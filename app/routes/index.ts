import express, {Router as RouterExpress} from "express";
import {Router} from "./interfaces/router.interface";
import {HealthRouter} from "./health.router";

/**
 * Configure all routes of API
 * @param app
 */
export function setupRoutes(app: express.Application) {
    const routes: any = [];
    let router = RouterExpress();
    routes.push(new HealthRouter(router));
    app.use('/api/v1',  router)
    routes.forEach((route: Router) => {
        console.log(`Routes configured for ${route.name}`);
    });
}