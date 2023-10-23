CREATE TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    surname VARCHAR(50),
    email VARCHAR(100),
    telephone VARCHAR(20)
);

CREATE TABLE tables (
    id SERIAL PRIMARY KEY,
    numbers_tables INT,
    numbers_of_seat INT,
    flag BOOLEAN
);

CREATE TABLE reservation (
    id SERIAL PRIMARY KEY,
    dates DATE,
    start_time TIME,
    last_time TIME,
    user_id INT,
    tables_id INT,
    FOREIGN KEY (user_id) REFERENCES person(id),
    FOREIGN KEY (tables_id) REFERENCES tables(id)
);

CREATE TABLE menu_coffee(
    id SERIAL PRIMARY KEY,
    name_coffe VARCHAR(50),
    volume VARCHAR(15),
    photo BYTEA,
    price int
);


CREATE TABLE menu_snacks(
    id SERIAL PRIMARY KEY,
    name_snacks VARCHAR(50),
    description_snacks VARCHAR(75),
    photo BYTEA,
    price int
);

CREATE TABLE menu_hookah(
    id SERIAL PRIMARY KEY,
    name_hookah VARCHAR(50),
    description_hookah VARCHAR(75),
    photo BYTEA,
    price int
);


ALTER TABLE menu_snacks
ALTER COLUMN description_snacks TYPE VARCHAR(155);


dessert

CREATE TABLE menu_dessert(
    id SERIAL PRIMARY KEY,
    name_dessert VARCHAR(50),
    description_dessert VARCHAR(155),
    photo BYTEA,
    price int
);


UPDATE menu_coffee
SET foto = '../../photos/assest/espresso.png'
WHERE id = 1;


CREATE TABLE Review(
    id SERIAL PRIMARY KEY,
    name_person VARCHAR(50),
    rating int,
    bodyMessage VARCHAR(255),
);