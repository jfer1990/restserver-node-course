import express from 'express'; 
import cors from 'cors'; 
import router from '../routes/user.js';
import dbConnection from '../db/config.js';

class Server{
    constructor(){
        this.app = express(); 
        this.port = process.env.PORT;

        //connect db
        this.connectDB(); 

        //Middlewares
        this.middlewares(); 


        //Rutas de mi app
        this.routes(); 
    }
    routes(){
        this.app.use('/api/usuarios', router); 
    }

    middlewares(){
        this.app.use(express.static('public')); 
        this.app.use( cors() ); 

        //Lectura y parseo
        this.app.use( express.json() ) 
    }

    async connectDB(){
        await dbConnection(); 
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('servidor corriento en puerto ', this.port); 
        })
    }
}

export default Server; 