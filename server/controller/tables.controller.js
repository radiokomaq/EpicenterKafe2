const db = require('../db');

class TablesController {
    async createTables(req, res) {

        const { numbers_tables, numbers_of_seat, flag } = req.body;
        const newTables = await db.query(`INSERT INTO tables (numbers_tables, numbers_of_seat, flag) values ($1,$2,$3) RETURNING *`, [numbers_tables, numbers_of_seat, flag]);
        res.json(newTables.rows[0]);
    }

    async getTables(req, res) {
        const tables = await db.query('SELECT * FROM tables')
        res.json(tables.rows)
    }

    async deleteTables(req, res) {
       
    }
}

module.exports = new TablesController();