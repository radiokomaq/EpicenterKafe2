const db = require('../db');

class UserController {
    async createUser(req, res) {
        const { name, surname, email, telephone } = req.body
        const newPerson = await db.query(`INSERT INTO person (name,surname,email,telephone) values ($1,$2,$3,$4) RETURNING id`, [name, surname, email, telephone])
        return newPerson.rows[0].id;
    }
    async getUser(req, res) {
        const users = await db.query('SELECT * FROM person')
        res.json(users.rows)
    }
    async getOneUser(req, res) {
        const id = req.params.id
        const user = await db.query('SELECT * FROM person where id = $1', [id])
        res.json(user.rows[0])
    }
    async updateUser(req, res) {
        const { id, name, surname, email, telephone } = req.body
        const user = await db.query(
            'UPDATE person SET name = $1, surname = $2, email= $3, telephone= $4 WHERE id = $5 RETURNING *',
            [name, surname, email, telephone, id]
        )
        res.json(user.rows[0])
    }
    async deleteUser(req, res) {
        const id = req.params.id
        const user = await db.query('DELETE FROM person where id = $1', [id])
        res.json(user.rows[0])
    }
}

module.exports = new UserController()


