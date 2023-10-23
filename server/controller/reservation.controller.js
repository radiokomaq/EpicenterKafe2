const db = require('../db');
const userController = require('./user.controller')

class ReservationController {
    async createReservation(req, res) {
        const { name, surname, email, telephone, dates, tables_id, start_time, last_time } = req.body
        const searchPerson = await db.query(`SELECT * FROM person WHERE name = $1 AND surname = $2 AND telephone = $3`, [name, surname, telephone])
        if (searchPerson.rows.length === 0) {
            const newUser = await userController.createUser(req,res, name, surname, email, telephone);

            const newReservation = await db.query(`INSERT INTO reservation (dates,start_time,last_time,user_id,tables_id) values ($1,$2,$3,$4,$5) RETURNING *`, [dates, start_time, last_time, newUser, tables_id])
            res.json(newReservation.rows)
        } else {
            const newReservation = await db.query(`INSERT INTO reservation (dates,start_time,last_time,user_id,tables_id) values ($1,$2,$3,$4,$5) RETURNING *`, [dates, start_time, last_time, searchPerson.rows[0].id, tables_id])
            res.json(newReservation.rows)
        }
        //  userController.createUser()
        // const newReservation = await db.query(`INSERT INTO person (name,surname,email,telephone) values ($1,$2,$3,$4) RETURNING *`, [name, surname, email, telephone])

    }
    async searchFreeTablse(req, res) {
        const { dates } = req.body
        const newFreeTablse = await db.query(`SELECT tables_id FROM reservation WHERE dates = $1`, [dates])
        // res.json(newFreeTablse.rows)
        const tableIds = newFreeTablse.rows.map(row => row.tables_id);
        res.json(tableIds);
    }

}

module.exports = new ReservationController();


