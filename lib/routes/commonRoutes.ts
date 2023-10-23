import { Application, Request, Response } from "express";

export class CommonRoutes {
    public route(app: Application){
        /**
         * Mismatch URL
         */
        app.all('*', (req: Request, res: Response)=>{
            res.status(404).send({
                STATUS: 'FAILURE',
                MESSAGE: 'Invalid URL. Check your URL and try again.'
            })
        })


    }

}