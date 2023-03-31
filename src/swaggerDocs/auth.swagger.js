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
 *   name: Authentication
 *   description: The authentication managing API
 */

/**
 * @swagger
 * /api/auth:
 *   post:
 *     summary: Logs a user in to their account
 *     description: Endpoint to log in a user to their account
 *     tags:
 *       - Authentication
 *     requestBody:
 *       description: User object that needs to be logged in
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
 *         description: User logged in successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   $ref: '#/components/schemas/User'
 *                   description: User object containing user details
 *                 token:
 *                   type: string
 *                   description: JWT authentication token
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
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
 *       '401':
 *         description: Unauthorized. User does not exist or wrong email provided
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message
 *                   example: Wrong email. Please try again.
 *       '500':
 *         description: Internal Server Error. Failed to log in user
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
