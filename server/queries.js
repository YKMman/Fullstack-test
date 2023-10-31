const getAllProducts = "SELECT * FROM products";
const createProduct = "INSERT INTO products (name, price, category) VALUES ($1, $2, $3)";
const searchProduct = "SELECT * FROM products WHERE name LIKE $1";
const sort = 'SELECT * FROM products WHERE category = $1 ORDER BY price $2';

module.exports = {
    getAllProducts,
    createProduct,
    searchProduct,
    sort
}


