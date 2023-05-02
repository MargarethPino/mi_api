import  Express  from "express";
const router = Express.Router();

import {agregar,listar,eliminar,editar,listarUno} from "../controllers/tournamentsController.js";

//ruta es para  gestionar Tournaments
/**
 * @swagger
 * tags:
 *   name: tournaments
 *   description: API para gestionar los tournaments
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     tournaments:
 *         $ref: '/components/schemas/tournaments'
 *       required:
 *         - LigasFutbolEurope
 *         - DescripciónLigas 
 *      
 *       properties:
 *         id: 64514de44d9f8c372fa04cbb
 *           type: string
 *           description: ID generado automáticamente por MongoDB
 *         LigasFutbolEurope:
 *           type: string
 *           description: Nombre de las ligas  registradas 
 *         DescripciónLigas :
 *           type: string
 *           description: Descripcion de las ligas 
 *           
 *       example:
 *         id: 64514de44d9f8c372fa04cbb
 *         LigasFutbolEurope: Liga de Campeones de la UEFA (Champions League)
 *         DescripciónLigas : La Liga de Campeones de la UEFA, también conocida como Copa de Europa, es el torneo internacional oficial de fútbol más prestigioso a nivel de clubes en Europa. La Liga de Campeones implica una fase de grupos seguida de rondas eliminatorias, que culminan en una final de un solo partido en mayo
 */
/**
 * @swagger
 * /api/tournaments:
 *   post:
 *     summary: Agrega un nuevo Tournaments
 *     tags: [tournaments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '/components/schemas/tournaments'
 *     responses:
 *       200:
 *         description: Torneo  agregado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: ''
 *       400:
 *         description: Los campos LigasFutbolEurope, DescripciónLigas  son importantes
 */


router.get("/", listar);
/**
 * @swagger
 * /api/tournaments/{id}:
 *   get:
 *     summary: Obtiene una liga  por su ID
 *     tags: [tournaments]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la liga  a obtener
 *     responses:
 *       200:
 *         description: Liga de futbol   encontrada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '/components/schemas/tournaments'
 *       404:
 *         description: La liga de futbol  con el ID especificado no fue encontrado
 */
router.get("/:id", listarUno);
/**
 * @swagger
 * /api/tournaments/{id}:
 *   put:
 *     summary: Actualiza una Liga  existente
 *     tags: [tournaments]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la liga de futbol  o DescripciónLigas  a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '/components/schemas/tournaments'
 *     responses:
 *       200:
 *         description: Liga de futbol   actualizada exitosamente
 *       404:
 *         description: El liga de futbol  con el ID especificado no fue editado
 *
 */
router.post("/", agregar);
/**
 * @swagger
 * /api/tournaments:
 *   get:
 *     summary: Obtiene todos los registros 
 *     tags: [tournaments]
 *     responses:
 *       200:
 *         description: Lista de todas las  liga de futbol
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '/components/schemas/tournaments'
 */
router.put("/:id", editar);
/**
 * @swagger
 * /api/tournaments/{id}:
 *   delete:
 *     summary: Elimina una liga de futbol  existente
 *     tags: [tournaments]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la liga de futbol a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '/components/schemas/tournaments'
 *     responses:
 *       200:
 *         description: liga eliminada exitosamente
 *       404:
 *         description: La liga de futbol con el ID especificado no fue eliminado
 *
 */
router.delete("/:id", eliminar);




export default router; 