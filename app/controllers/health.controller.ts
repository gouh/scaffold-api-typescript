import express from "express";

const HTTP_STATUS_CODE_OK = 200;
const EXPRESS_VERSION = '4.17.17';

export class HealthController {
    /**
     * Get health of application
     * @param req
     * @param res
     */
    async get(req: express.Request, res: express.Response) {
        return res.status(HTTP_STATUS_CODE_OK).send({
            expressVersion: EXPRESS_VERSION
        })
    }
}