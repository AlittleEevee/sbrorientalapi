const conection = require('../db/mysql');


var pedido = {}

pedido.getPedido = (callback) => {
    con = conection.conMysql();
    if(con){
        con.query('SELECT * FROM pedido', (error,rows) => {
            if(error){
                throw error;
            }else{
                res = {
                    status:"success",
                    data:rows
                }
                callback(null,res);;
            }
            conection.cerrarConexion();
        });
    }
}

pedido.getPedidoById = (id,callback) => {
    con = conection.conMysql();
    if(con){
        const _id = con.escape(id);
        var sql = 'SELECT * FROM pedido WHERE pedido_id = '+_id;
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

pedido.insertPedido = (pedidoData,callback) => {
    con = conection.conMysql();
	if (con) 
	{
		con.query('call add_pedido ( ?,?,?,?,?,?, @nuevo_pedido_id )', [pedidoData.cliente_id ,pedidoData.forma_pago, pedidoData.ubicacion_entrega, pedidoData.tipo_entrega, pedidoData.precio_total, pedidoData.estado_entrega], (error, result) => {
			if(error){
				throw error;
			}else{
                con.query('SELECT @nuevo_pedido_id AS pedido_id', (error, result) => {
                    if (error) {
                        throw error; // Manejo de errores en la segunda consulta
                    } else {
                        // Devuelve el ID al callback
                        callback(null, { status: "success", data: result});
                    }
                    conection.cerrarConexion(); // Cierra la conexión
                });
			}
		});
	}
}

pedido.updatePedido = (id,datosPedido,callback) => {
    const _id = con.escape(id);
    const _cliente_id = con.escape(datosPedido.cliente_id);
    const _trabajador_id = con.escape(datosPedido.trabajador_id);
    const _forma_pago = con.escape(datosPedido.forma_pago);
    const _ubicacion_entrega = con.escape(datosPedido.ubicacion_entrega);
    const _tipo_entrega = con.escape(datosPedido.tipo_entrega);
    const _precio_total = con.escape(datosPedido.precio_total);
    const _estado_entrega = con.escape(datosPedido.estado_entrega);
    const _fecha_pedido = con.escape(datosPedido.fecha_pedido);
    const _fecha_entrega = con.escape(datosPedido.fecha_entrega);

    con = conection.conMysql();
    if(con){
        var sql = `UPDATE pedido SET cliente_id=${_cliente_id}, trabajador_id=${_trabajador_id}, forma_pago=${_forma_pago}, ubicacion_entrega=${_ubicacion_entrega}, tipo_entrega=${_tipo_entrega}, precio_total=${_precio_total}, estado_entrega=${_estado_entrega}, fecha_pedido=${_fecha_pedido}, fecha_entrega=${_fecha_entrega} WHERE pedido_id=${_id}`;
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

pedido.deletePedido = (id,callback) => {

    con = conection.conMysql();
    if(con){
        const _id = con.escape(id);
        var sql = 'DELETE FROM pedido WHERE pedido_id = '+_id;
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

module.exports = pedido;