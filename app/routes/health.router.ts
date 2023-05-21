import express from "express";
import {HealthController} from "../controllers/health.controller";
import {Router} from "./interfaces/router.interface";
import {AbstractRouter} from "./abstract.router";

export class HealthRouter extends AbstractRouter implements Router {
    /**
     * @inheritDoc
     */
    protected routerName: string = "HealthRouter";

    /**
     * @inheritDoc
     */
    constructor(public app: express.Router) {
        super();
        this.configureRoutes();
    }

    /**
     * @inheritDoc
     */
    configureRoutes() {
        let healthController = new HealthController();
        this.app.get(`/health`, [
            healthController.get,
        ]);
    }
}