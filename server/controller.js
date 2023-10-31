const pool = require('./config')
const queries = require('./queries')
// const circularJSON = require('circular-json')

const helloWorld = (req, res) => {
    res.send('hello')
}

const products = (req, res) => {
    try {
        pool.query(queries.getAllProducts, (error, results) => {
            res.send(results)
        })
    } catch (error) {
        console.log(error)
    }
}

const createProducts = (req, res) => {
    const {name, price, category} = req.body
    
    try {
        pool.query(queries.createProduct, [name, price, category], (error, results) => {
            res.send(results)
        })
    } catch (error) {
        console.log(error)
    }
}

const search = (req, res) => {
    const {search} = req.body.category
    try {
        pool.query(queries.searchProduct, ['%' + search + '%'], (error, results) => {
            res.send(results)
        })
    } catch (error) {
        console.log(error)
    }
}

const sort = (req, res) => {
    const {category, price} = req.body.sort

    let query2 = 'SELECT * FROM products WHERE category = $1';

    if (price === 'ASC') {
        query2 += ' ORDER BY price ASC';
    } else if (price === 'DESC') {
        query2 += ' ORDER BY price DESC';
    }

    try {
        pool.query(query2, [category], (error, results) => {
            res.send(results)
        });
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    helloWorld,
    products,
    createProducts,
    search,
    sort
}