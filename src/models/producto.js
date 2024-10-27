const conection = require('../db/mysql');


var producto = {}

producto.getProducto = (callback) => {
    con = conection.conMysql();
    if(con){
        con.query('SELECT * FROM producto', (error,rows) => {
            if(error){
                throw error;
            }else{
                callback(null,rows);
            }
            conection.cerrarConexion();
        });
    }
}

module.exports = producto;