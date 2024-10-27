const con = require('../db/mysql');

var producto = {}

producto.getProducto = (callback) => {
    if(con){
        con.query('SELECT * FROM producto', (error,rows) => {
            if(error){
                throw error;
            }else{
                callback(null,rows);
            }
        });
    }
}

module.exports = producto;