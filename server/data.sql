\l+
\dt+
CREATE DATABASE online_shop;
\connect online_shop

CREATE TABLE products (
    id serial PRIMARY KEY,
    name VARCHAR (255),
    price VARCHAR (255),
    category VARCHAR (255)
);



