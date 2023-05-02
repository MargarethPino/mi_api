import swaggerJsdoc from 'swagger-jsdoc';
import  SwaggerUI  from "swagger-ui-express" ;

const swaggerOptions = {
  definition: {
   openapi: '3.0.0',
    info: {
      title: 'MI_API',
      version: '1.0.0',
    },
    servers:[
      {
        url: "http://localhost:3001/api"
      },
      {
        url: "http://localhost:3000/api"
      }
    ],
  },
  apis: ['./routes/*.js'],
}

const swaggerSpec = swaggerJsdoc(swaggerOptions)
export default swaggerSpec;