const express = require('express');
const router = express.Router();
const db = require('../db/database');

/**
 * @swagger
 * /filmes:
 *   get:
 *     summary: Retorna a lista de filmes
 *     responses:
 *       200:
 *         description: Sucesso. Retorna a lista de filmes.
 */
router.get('/', (req, res) => {
    db.select('*')
        .from('filmes')
        .then((filmes) => {
            res.json(filmes);
        })
        .catch((error) => {
            res.status(500).json({ error: 'Ocorreu um erro ao listar os filmes.' });
        });
});

/**
 * @swagger
 * /filmes/{id}:
 *   get:
 *     summary: Retorna os detalhes de um filme
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do filme
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sucesso. Retorna os detalhes do filme.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Filme'
 *       404:
 *         description: Filme não encontrado.
 */
router.get('/:id', (req, res) => {
    const id = req.params.id;

    db.select('*')
        .from('filmes')
        .where({ id: id })
        .first()
        .then((filme) => {
            if (filme) {
                res.json(filme);
            } else {
                res.status(404).json({ error: 'Filme não encontrado.' });
            }
        })
        .catch((error) => {
            res.status(500).json({ error: 'Ocorreu um erro ao obter o filme.' });
        });
});

/**
 * @swagger
 * /filmes:
 *   post:
 *     summary: Adiciona um novo filme
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Filme'
 *     responses:
 *       200:
 *         description: Sucesso. Retorna o filme adicionado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Filme'
 *       500:
 *         description: Ocorreu um erro ao adicionar o filme.
 */
router.post('/', (req, res) => {
    const filme = req.body;

    db.insert(filme)
        .into('filmes')
        .then(() => {
            res.status(201).json({ message: 'Filme adicionado com sucesso.' });
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: 'Ocorreu um erro ao adicionar o filme.' });
        });
});

/**
 * @swagger
 * /filmes/{id}:
 *   put:
 *     summary: Atualiza os detalhes de um filme
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do filme
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Filme'
 *     responses:
 *       200:
 *         description: Filme atualizado com sucesso.
 *       400:
 *         description: Dados inválidos fornecidos para atualizar o filme.
 *       404:
 *         description: Filme não encontrado.
 */
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const filme = req.body;

    db('filmes')
        .where({ id: id })
        .update(filme)
        .then((updated) => {
            if (updated) {
                res.json({ message: 'Filme atualizado com sucesso.' });
            } else {
                res.status(404).json({ error: 'Filme não encontrado.' });
            }
        })
        .catch((error) => {
            res.status(500).json({ error: 'Ocorreu um erro ao atualizar o filme.' });
        });
});

/**
 * @swagger
 * /filmes/{id}:
 *   delete:
 *     summary: Exclui um filme
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do filme
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Filme excluído com sucesso.
 *       404:
 *         description: Filme não encontrado.
 */
router.delete('/:id', (req, res) => {
    const id = req.params.id;

    db('filmes')
        .where({ id: id })
        .del()
        .then((deleted) => {
            if (deleted) {
                res.json({ message: 'Filme excluído com sucesso.' });
            } else {
                res.status(404).json({ error: 'Filme não encontrado.' });
            }
        })
        .catch((error) => {
            res.status(500).json({ error: 'Ocorreu um erro ao excluir o filme.' });
        });
});

module.exports = router;
