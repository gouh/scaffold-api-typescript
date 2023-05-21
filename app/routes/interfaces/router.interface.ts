export interface Router {
    /**
     * Get name of router
     * @return string
     */
    get name(): string;

    /**
     * Configure for some controller
     */
    configureRoutes(): void;
}