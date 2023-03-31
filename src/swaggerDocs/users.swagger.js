/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          required:
 *              - email
 *          properties:
 *              _id:
 *                  type: string
 *                  description: Auto-generated mongoose id
 *              email:
 *                  type: string
 *                  description: User's email address
 *          example:
 *              _id: 64259a072c2cbe31fc5d83c4
 *              email: khaledhalloua@outlook.com
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 */

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Creates a new user account
 *     description: Endpoint to create a new user account
 *     tags:
 *       - Users
 *     requestBody:
 *       description: User object that needs to be created
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: User's email address
 *             example:
 *               email: khaledhalloua@outlook.com
 *     responses:
 *       '200':
 *         description: User account created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       '400':
 *         description: Bad Request. Invalid request body or missing email
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message
 *                   example: Please enter your email address.
 *       '409':
 *         description: Conflict. User already exists with the given email address
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message
 *                   example: User already exists.
 *       '500':
 *         description: Internal Server Error. Failed to create user account
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message
 *                   example: Internal Server Error.
 */