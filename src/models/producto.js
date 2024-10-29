const conection = require('../db/mysql');


var producto = {}

producto.getProducto = (callback) => {
    con = conection.conMysql();
    if(con){
        con.query('SELECT * FROM producto', (error,rows) => {
            if(error){
                throw error;
            }else{
                res = {
                    status:"success",
                    data:rows
                }
                callback(null,res);
            }
            conection.cerrarConexion();
        });
    }
}

producto.getProductoById = (id,callback) => {
    con = conection.conMysql();
    if(con){
        const _id = con.escape(id);
        var sql = 'SELECT * FROM producto WHERE producto_id = '+_id;
        con.query(sql, (error,rows) => {
            if(error){
                throw error;
            }else{
                res = {
                    status:"success",
                    data:rows
                }
                callback(null,res);
            }
            conection.cerrarConexion();
        });
    }
}

producto.insertProducto = (productoData,callback) => {
    con = conection.conMysql();
	if (con) 
	{
		con.query('INSERT INTO producto SET ?', productoData, (error, result) => {
			if(error){
				throw error;
			}else{
				callback(null, {status:"success"});
			}
            conection.cerrarConexion();
		});
	}
}

producto.updateProducto = (id,datosProducto,callback) => {
    const _id = con.escape(id);
    const _descripcion = con.escape(datosProducto.descripcion);
    const _precio = con.escape(datosProducto.precio);
    const _categoria_id = con.escape(datosProducto.categoria_id);
    const _imagenes = con.escape(datosProducto.imagenes);

    con = conection.conMysql();
    if(con){
        var sql = `UPDATE producto SET descripcion=${_descripcion}, precio=${_precio}, categoria_id=${_categoria_id}, imagenes=${_imagenes} WHERE producto_id=${_id}`;
        con.query(sql, (error,rows) => {
            if(error){
                throw error;
            }else{
                callback(null, {status:"success"});
            }
            conection.cerrarConexion();
        });
    }
}

producto.deleteProducto = (id,callback) => {

    con = conection.conMysql();
    if(con){
        const _id = con.escape(id);
        var sql = 'DELETE FROM producto WHERE producto_id = '+_id;
        con.query(sql, (error,rows) => {
            if(error){
                throw error;
            }else{
                callback(null, {status:"success"});
            }
            conection.cerrarConexion();
        });
    }
}

module.exports = producto;