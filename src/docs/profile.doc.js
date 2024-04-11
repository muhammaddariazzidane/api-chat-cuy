/**
 * @swagger
 * /profile:
 *   get:
 *     summary: Get profile
 *     description: Mendapatkan profil dengan menggunakan token JWT yang diberikan melalui header sebagai metode autentikasi.
 *     tags: [Profile]
 *     operationId: getProfile
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: Authorization
 *         in: header
 *         required: true
 *         schema:
 *           type: string
 *           format: jwt
 *           example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTYxY2MzNmI1ODgzZjczMjJmNzYyYyIsIm5hbWUiOiJaaWRhbiIsImVtYWlsIjoiemlkYW5AZ21haWwuY29tIiwicHJvZmlsZVBpY3R1cmUiOiJodHRwczovL2ZpZ21hLmNvbSIsImlhdCI6MTcxMjc4ODk3NX0.SLExC_V-YrjIZ0sVbaBRUD1BdmfUcM3N-DPASpZj9pI"
 *         description: Token JWT yang diperlukan untuk autentikasi
 *     responses:
 *       200:
 *         description: Profil berhasil diperoleh
 *       401:
 *         description: Autentikasi gagal, token tidak valid atau tidak ada
 *     components:
 *       securitySchemes:
 *         BearerAuth:
 *           type: http
 *           scheme: bearer
 *           bearerFormat: JWT
 */
