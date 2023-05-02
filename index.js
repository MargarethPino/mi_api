import  express  from 'express';
import dotenv from 'dotenv';
import conectarBD from'./config/db.js';

//swagger
import swaggerUI from 'swagger-ui-express';
import swaggerSpec from './docs/swagger.js';


//importancia de las  rutas
import usersRoutes from "./routes/usersRoutes.js";
import tournamentsRoutes from "./routes/tournamentsRoutes.js";
import footballRoutes from "./routes/footballRoutes.js";

//inciamos con el servidor express
const app = express()
app.use(express.json())//para leer los datos en formato json

//iniciamos  variables del entorno
dotenv.config();

//conectar a BD  mongo 
conectarBD();

//routing  del API
app.use("/api/users", usersRoutes);
app.use("/api/tournaments", tournamentsRoutes);
app.use("/api/football", footballRoutes);


//rutas de documentacion 
app.use('/documentation', swaggerUI.serve, swaggerUI.setup(swaggerSpec))

//variable de entorno
const PORT = process.env.PORT || 3000

//lanzamos la API
app.listen(PORT,()=>{
    console.log(`API escuchando en ${PORT} `)
})

export default app;