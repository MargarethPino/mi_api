import  Express  from "express";
const router = Express.Router();

import {agregar,listar,eliminar,editar,listarUno} from "../controllers/footballController.js";

//ruta es para  gestionar football
/**
 * @swagger
 * tags:
 *   name: football
 *   description: API para gestionar los equipos de futbol y su entrenador 
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     football:
 *         $ref: '/components/schemas/football'
 *       required:
 *         - Equiposfutbol
 *         - Entrenador
 *          
 *       properties:
 *         id: 64516f214d9f8c372fa04cce
 *           type: string
 *           description: ID generado automáticamente por MongoDB
 *         Equiposfutbol:
 *           type: string
 *           description: Nombre del equipo registrado 
 *         Entrenador:
 *           type: string
 *           description: Nombre del entrenador 
 *           
 *       example:
 *         id: 64516f214d9f8c372fa04cce
 *         Equiposfutbol:  Fútbol Club Barcelona
 *         Entrenador: Xavi Hernández
 */
/**
 * @swagger
 * /api/football:
 *   post:
 *     summary: Agrega un nuevo Entrenador
 *     tags: [football]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '/components/schemas/football'
 *     responses:
 *       200:
 *         description: Entrenador  agregado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: ''
 *       400:
 *         description: Los campos EquipoRegistrado, CategoriaJuego y  Jugadores son requeridos
 */


router.get("/", listar);
/**
 * @swagger
 * /api/football/{id}:
 *   get:
 *     summary: Obtiene un equipo de futbol  por su ID
 *     tags: [football]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del equipo a obtener
 *     responses:
 *       200:
 *         description: equipo de futbol   encontrado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '/components/schemas/football'
 *       404:
 *         description: El equipo futbol  con el ID especificado no fue encontrado
 */
router.get("/:id", listarUno);
/**
 * @swagger
 * /api/football/{id}:
 *   put:
 *     summary: Actualizar un equipo de futbol  existente
 *     tags: [football]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del equipo de futbol   a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '/components/schemas/football'
 *     responses:
 *       200:
 *         description: equipo de futbol   actualizado exitosamente
 *       404:
 *         description: El equipo de futbol con el ID especificado no fue editado
 *
 */
router.post("/", agregar);
/**
 * @swagger
 * /api/football:
 *   get:
 *     summary: Obtiene todos los registros 
 *     tags: [football]
 *     responses:
 *       200:
 *         description: Lista de todos los equipos registrados 
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '/components/schemas/football'
 */
router.put("/:id", editar);
/**
 * @swagger
 * /api/football/{id}:
 *   delete:
 *     summary: Elimina un equipo de futbol  existente
 *     tags: [football]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del equipo de futbol a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '/components/schemas/football'
 *     responses:
 *       200:
 *         description: jugador eliminado exitosamente
 *       404:
 *         description: El equipo de futbol  con el ID especificado no fue eliminado
 *
 */
router.delete("/:id", eliminar);




export default router; 