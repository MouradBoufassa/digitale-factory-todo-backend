/**
 * @swagger
 * components:
 *  schemas:
 *      Todo:
 *          type: object
 *          properties:
 *              _id:
 *                  type: string
 *                  description: Auto-generated mongoose id
 *              author:
 *                  type: string
 *                  description: ID of the user who created the todo
 *              title:
 *                  type: string
 *                  description: Title of the todo
 *              description:
 *                  type: string
 *                  description: Description of the todo
 *              position:
 *                  type: number
 *                  description: Position of the todo
 *              finished:
 *                  type: boolean
 *                  description: Indicates whether the todo is finished or not
 *              embeddedTodos:
 *                  type: array
 *                  description: A list of embedded todos
 *                  items:
 *                      type: object
 *                      properties:
 *                          title:
 *                              type: string
 *                              description: Title of the embedded todo
 *                          checked:
 *                              type: boolean
 *                              description: Indicates whether the embedded todo is finished or not
 *              endDate:
 *                  type: string
 *                  format: date-time
 *                  description: Due date of the todo
 *          example:
 *              _id: 64259a072c2cbe31fc5d83c4
 *              author: 12df7a97f24d64b7c993be44
 *              title: Buy groceries
 *              description: Need to buy groceries for the week
 *              position: 1
 *              finished: false
 *              embeddedTodos: []
 *              endDate: 2022-04-01T17:00:00.000Z
 */

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 * 
 * security:
 *   - bearerAuth: []
 * /api/todos:
 *   post:
 *     summary: Creates a new todo for a user
 *     description: Creates a new todo for a user.
 *     tags: [Todos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Todo'
 *     responses:
 *       200:
 *         description: Todo object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message
 *                   example: Please enter a title.
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message
 *                   example: Unauthorized
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message
 *                   example: Server error
 */

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 * 
 * security:
 *   - bearerAuth: []
 * /api/todos:
 *  get:
 *      summary: Gets the todos of an authenticated user
 *      tags: [Todos]
 *      security:
 *          - bearerAuth: []
 *      responses:
 *          200:
 *              description: A list of todos
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Todo'
 *          401:
 *              $ref: '#/components/responses/UnauthorizedError'
 */

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 * 
 * security:
 *   - bearerAuth: []
 * /api/todos/{id}:
 *  patch:
 *      summary: Updates a todo by its ID
 *      description: This route updates an existing todo item by its ID.
 *      tags: [Todos]
 *      parameters:
 *          - name: id
 *            in: path
 *            description: ID of the todo item to update
 *            required: true
 *            schema:
 *              type: string
 *      requestBody:
 *          description: New details of the todo item to update
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          title:
 *                              type: string
 *                          description:
 *                              type: string
 *                          endDate:
 *                              type: string
 *                              format: date-time
 *                          finished:
 *                              type: boolean
 *                      example:
 *                          title: Buy groceries
 *                          description: Need to buy milk and bread
 *                          endDate: '2023-04-10T00:00:00.000Z'
 *                          finished: false
 *      responses:
 *          200:
 *              description: Returns the updated todo item
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Todo'
 *          401:
 *              description: Unauthorized access - missing or invalid token
 *          404:
 *              description: The requested todo item was not found
 *          500:
 *              description: Internal server error
 */

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 * 
 * security:
 *   - bearerAuth: []
 * /api/todos/reorder:
 *   put:
 *     summary: Reorders a todo by its activeIndex and overIndex
 *     tags: [Todos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - activeIndex
 *               - overIndex
 *             properties:
 *               activeIndex:
 *                 type: integer
 *                 description: The current position index of the todo that the user is dragging
 *               overIndex:
 *                 type: integer
 *                 description: The position index of the todo that the user is dragging over
 *             example:
 *               activeIndex: 2
 *               overIndex: 4
 *     responses:
 *       '200':
 *         description: The reordered list of todos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Todo'
 *       '400':
 *         description: Bad request. The request did not contain the required fields
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Please provide activeIndex and overIndex
 *       '401':
 *         description: Unauthorized. The user must be authenticated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: You must be logged in to perform this action
 *       '404':
 *         description: The todo with the given ID was not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: This todo does not exist. Please try again later.
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: An error occurred while trying to reorder the todos
 */