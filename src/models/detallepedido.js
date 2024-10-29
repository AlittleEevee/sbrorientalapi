const conection = require('../db/mysql');


var detallepedido = {}

detallepedido.getDetallepedido = (callback) => {
    con = conection.conMysql();
    if(con){
        con.query('SELECT * FROM detallepedido', (error,rows) => {
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

detallepedido.getDetallepedidoById = (id,callback) => {
    con = conection.conMysql();
    if(con){
        const _id = con.escape(id);
        var sql = 'SELECT * FROM detallepedido WHERE detallepedido_id = '+_id;
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

detallepedido.insertDetallepedido = (detallepedidoData,callback) => {
    con = conection.conMysql();
	if (con) 
	{
		con.query('INSERT INTO detallepedido SET ?', detallepedidoData, (error, result) => {
			if(error){
				throw error;
			}else{
				callback(null, {status:"success"});
			}
            conection.cerrarConexion();
		});
	}
}

detallepedido.updateDetallepedido = (id,datosDetallepedido,callback) => {
    const _id = con.escape(id);
    const _pedido_id = con.escape(datosDetallepedido.pedido_id);
    const _producto_id = con.escape(datosDetallepedido.producto_id);
    const _cantidad = con.escape(datosDetallepedido.cantidad);
    const _precio_unitario = con.escape(datosDetallepedido.precio_unitario);

    con = conection.conMysql();
    if(con){
        var sql = `UPDATE detallepedido SET pedido_id=${_pedido_id}, producto_id=${_producto_id}, cantidad=${_cantidad}, precio_unitario=${_precio_unitario} WHERE detallepedido_id=${_id}`;
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

detallepedido.deleteDetallepedido = (id,callback) => {

    con = conection.conMysql();
    if(con){
        const _id = con.escape(id);
        var sql = 'DELETE FROM detallepedido WHERE detallepedido_id = '+_id;
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

module.exports = detallepedido;