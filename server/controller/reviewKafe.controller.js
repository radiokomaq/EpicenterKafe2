const db = require('../db');


class ReviewKafe{

    async createReview(req, res) {

        const { name_person, rating, massageBody } = req.body;
        const newReview = await db.query(`INSERT INTO review (name_person, rating, bodymessage) values ($1,$2,$3) RETURNING *`, [name_person, rating, massageBody]);
        res.json(newReview.rows);

    }
    async getReview(req,res){
        const review = await db.query('SELECT * FROM review')
        res.json(review.rows)
    }


}


module.exports = new ReviewKafe();