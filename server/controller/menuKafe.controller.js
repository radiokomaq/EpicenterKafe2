const db = require('../db');


class MenuKafeController {
async createMenuHookah(req,res){
    const {name_hookah, description_hookah, price} = req.body;
    const createHookah = await db.query(`INSERT INTO menu_hookah (name_hookah, description_hookah, price) values ($1,$2,$3) RETURNING *`,[name_hookah,description_hookah, price])
    res.json(createHookah.rows)
}
async createMenuSnacks(req,res){
    const {name_snacks, description_snacks, price} = req.body;
    const createSnacks = await db.query(`INSERT INTO menu_snacks (name_snacks, description_snacks, price) values ($1,$2,$3) RETURNING *`,[name_snacks,description_snacks, price])
    res.json(createSnacks.rows)
}
async getSnacks(req,res){
    const tables = await db.query('SELECT * FROM menu_snacks')
    res.json(tables.rows)
}

async createMenuKoffe(req,res){
    const {name_coffe, volume, price} = req.body;
    const createKoffe= await db.query(`INSERT INTO menu_coffee (name_coffe, volume, price) values ($1,$2,$3) RETURNING *`,[name_coffe,volume, price])
    res.json(createKoffe.rows)
}

async createMenuDessert(req,res){
    const {name_dessert, description_dessert, price} = req.body;
    const createDessert= await db.query(`INSERT INTO menu_dessert (name_dessert, description_dessert, price) values ($1,$2,$3) RETURNING *`,[name_dessert,description_dessert, price])
    res.json(createDessert.rows)
}
async createMenuPhotos(req,res){
    const {id,photos} = req.body
    const createPhotos = await db.query(`UPDATE menu_snacks
    SET photo = $2
    WHERE id = $1 RETURNING *`,[id,photos])
    res.json(createPhotos.rows)
}

async deleteKoffe(req, res) {
    const id = req.params.id
    const user = await db.query('DELETE FROM menu_coffee where id = $1', [id])
    res.json(user.rows[0])
}

// async getMenuKafe(req,res){
//     const MenuKafe = await db.query('SELECT * FROM menu_snacks, menu_coffee, menu_dessert,menu_hookah')
//     res.json(MenuKafe.rows)
// }
async getMenuKafe(req, res) {
    const menuSnacks = await db.query('SELECT * FROM menu_snacks');
    const menuCoffee = await db.query('SELECT * FROM menu_coffee');
    const menuDessert = await db.query('SELECT * FROM menu_dessert');
    const menuHookah = await db.query('SELECT * FROM menu_hookah');
  
    res.json({
      menuSnacks: menuSnacks.rows,
      menuCoffee: menuCoffee.rows,
      menuDessert: menuDessert.rows,
      menuHookah: menuHookah.rows
    });
  }
}



module.exports = new MenuKafeController();