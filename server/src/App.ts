import { Application, Router } from "../deps.ts";

type ServerEnvironment = 'development' | 'production';

class Server {
    private PORT: number;
    private APP: Application;
    private ENVIRONMET: ServerEnvironment;
    private HOSTNAME: string;
    
    constructor() {
        this.PORT = 9999;
        this.APP = new Application();
        this.ENVIRONMET = 'development';
        this.HOSTNAME = 'localhost';

        this.boot();
    }

    public setupRoutes(): void {
        const router = new Router();

        router.get("/", (ctx) => {
            ctx.response.body = {response: 'hello world'};
          });

        this.APP.use(router.routes())
    }
    
    public setupSecurity(): void {
        
    }

    public setupCors(): void {
    }
    
    public setupPlugins(){
        
    }
    
    public boot(): void {
        this.setupRoutes();
        
        try {
            if(this.ENVIRONMET === 'production'){
                this.APP.listen({
                    port: this.PORT,
                    secure: true,
                });
            } else if (this.ENVIRONMET === 'development') {
                this.APP.listen({
                    port: this.PORT,
                    hostname: this.HOSTNAME,
                    secure: false,
                })
            }

            console.log(`App is up and running on port ${this.PORT}`)
        } catch (error) {
            console.error('An error occured when running the server')
        }
    }
}

new Server();