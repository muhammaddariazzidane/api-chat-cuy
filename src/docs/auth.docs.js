/**
 * @swagger
 * paths:
 *   /auth/register:
 *     post:
 *       summary: Registrasi pengguna
 *       description: Mendaftarkan pengguna baru ke dalam sistem
 *       tags: [Auth]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required:
 *                 - name
 *                 - email
 *                 - password
 *               properties:
 *                 name:
 *                   type: string
 *                   example: John Doe
 *                 email:
 *                   type: string
 *                   format: email
 *                   example: john.doe@gmail.com
 *                 password:
 *                   type: string
 *                   format: password
 *                   example: 123456
 *       responses:
 *         200:
 *           description: Pendaftaran berhasil
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: User registered successfully
 *   /auth/login:
 *     post:
 *       summary: Login user
 *       description: Login user and return token if success
 *       tags: [Auth]
 *       operationId: loginUser
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required:
 *                 - email
 *                 - password
 *               properties:
 *                 email:
 *                   type: string
 *                   format: email
 *                   example: zidan@gmail.com
 *                 password:
 *                   type: string
 *                   format: password
 *                   example: 123
 *       responses:
 *         200:
 *           description: login successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: login successfully
 *                   token:
 *                     type: string
 *                     example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTYxY2MzNmI1ODgzZjczMjJmNzYyYyIsIm5hbWUiOiJaaWRhbiIsImVtYWlsIjoiemlkYW5AZ21haWwuY29tIiwicHJvZmlsZVBpY3R1cmUiOiJodHRwczovL2ZpZ21hLmNvbSIsImlhdCI6MTcxMjcyNjUwNH0.xFWPp1GKOgCQGdvZXwE17as4i4Q2Ur2LSTaRz6YsPgU"
 *         401:
 *           description: Authentication failed
 */
