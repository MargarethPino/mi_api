import  Express  from "express";
const router = Express.Router();

import {agregar,listar,eliminar,editar,listarUno} from "../controllers/userController.js";

//ruta es para  gestionar usuarios
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API para gestionar usuarios
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *         $ref: '/components/schemas/Users'
 *       required:
 *         - EquipoRegistrado
 *         - CategoriaJuego
 *         - Jugadores 
 *       properties:
 *         id: 6449c0e58ccbe8460071c26e
 *           type: string
 *           description: ID generado automáticamente por MongoDB
 *         EquipoRegistrado:
 *           type: string
 *           description: Nombre del equipo registrado 
 *         CategoriaJuego:
 *           type: string
 *           description: Nombre de la categoria de juego 
 *          Jugadores:
 *           type: string
 *           description: Nombre del jugador  
 *       example:
 *         id: 6449af30429779fa20ad5961
 *         EquipoRegistrado: Paris
 *         CategoriaJuego: Futbol
 *          Jugadores: Ousmane Dembélé
 */
/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Agrega un nuevo usuario
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '/components/schemas/Users'
 *     responses:
 *       200:
 *         description: Usuario agregado exitosamente
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
 * /api/users/{id}:
 *   get:
 *     summary: Obtiene un jugador por su ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del jugador a obtener
 *     responses:
 *       200:
 *         description: jugador  encontrado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '/components/schemas/Users'
 *       404:
 *         description: El jugador con el ID especificado no fue encontrado
 */
router.get("/:id", listarUno);
/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Actualiza un jugador existente
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del jugador o categoria de juego  a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '/components/schemas/Users'
 *     responses:
 *       200:
 *         description: jugador  actualizado exitosamente
 *       404:
 *         description: El jugador  con el ID especificado no fue editado
 *
 */
router.post("/", agregar);
/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Obtiene todos los registros 
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de todos los equipos registrados 
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '/components/schemas/Users'
 */
router.put("/:id", editar);
/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Elimina un jugador  existente
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del jugador a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '/components/schemas/Users'
 *     responses:
 *       200:
 *         description: jugador eliminado exitosamente
 *       404:
 *         description: El jugador  con el ID especificado no fue eliminado
 *
 */
router.delete("/:id", eliminar);




export default router; 