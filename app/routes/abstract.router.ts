import {Router} from "./interfaces/router.interface";

export abstract class AbstractRouter implements Router {
    /**
     * RouterName
     * @private
     */
    protected routerName: string;

    configureRoutes(): void {
        console.warn("It hasn't routes yet");
    }

    get name(): string {
        return this.routerName;
    }
}