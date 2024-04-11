/**
 * @swagger
 * /chat/{id}/message:
 *   get:
 *     summary: Dapatkan pesan
 *     description: Mengembalikan data pesan dari chat tertentu beserta detail pengirim dan penerima
 *     tags: [Chat]
 *     operationId: getMessages
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *           example: 661389c701304f716e95c1fe
 *     responses:
 *       200:
 *         description: Pesan berhasil diperoleh
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: ID pesan
 *                   message:
 *                     type: string
 *                     description: Isi pesan
 *                   senderId:
 *                     type: string
 *                     description: ID pengirim
 *                   receiverId:
 *                     type: string
 *                     description: ID penerima
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     description: Waktu pesan dikirim
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     description: Waktu pesan diperbarui
 *                   receiver:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: Nama penerima
 *                       email:
 *                         type: string
 *                         description: Email penerima
 *                   sender:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: Nama pengirim
 *                       email:
 *                         type: string
 *                         description: Email pengirim
 *       404:
 *         description: Chat tidak ditemukan
 */

/**
 * @swagger
 * /chat/{id}/send:
 *   post:
 *     summary: Kirim pesan
 *     description: Mengirim pesan ke chat ID yang spesifik
 *     tags: [Chat]
 *     operationId: sendMessage
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *           example: 661389c701304f716e95c1fe
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - message
 *             properties:
 *               message:
 *                 type: string
 *                 description: Isi pesan yang akan dikirim
 *     responses:
 *       200:
 *         description: Pesan berhasil dikirim
 *       400:
 *         description: Permintaan tidak valid
 */

/**
 * @swagger
 * /chat/{id}/update:
 *   put:
 *     summary: Perbarui pesan
 *     description: Memperbarui isi pesan pada chat ID yang spesifik
 *     tags: [Chat]
 *     operationId: putMessages
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *           example: 661389c701304f716e95c1fe
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - message
 *             properties:
 *               message:
 *                 type: string
 *                 description: Isi pesan yang diperbarui
 *     responses:
 *       200:
 *         description: Pesan berhasil diperbarui
 *       404:
 *         description: Pesan tidak ditemukan
 */

/**
 * @swagger
 * /chat/{id}/delete:
 *   delete:
 *     summary: Hapus pesan
 *     description: Menghapus pesan dari chat ID yang spesifik
 *     tags: [Chat]
 *     operationId: deleteMessages
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *           example: 661389c701304f716e95c1fe
 *     responses:
 *       200:
 *         description: Pesan berhasil dihapus
 *       404:
 *         description: Pesan tidak ditemukan
 */
