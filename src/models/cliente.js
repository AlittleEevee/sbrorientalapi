const conection = require('../db/mysql');

var cliente = {}

cliente.getCliente = (callback) => {
    con = conection.conMysql();
    if(con){
        con.query('SELECT * FROM cliente', (error,rows) => {
            if(error){
                throw error;
            }else{
                callback(null,rows);
            }
            conection.cerrarConexion();
        });
    }
}

cliente.getClienteById = (id,callback) => {
    con = conection.conMysql();
    if(con){
        const _id = con.escape(id);
        var sql = 'SELECT * FROM cliente WHERE cliente_id = '+_id;
        con.query(sql, (error,rows) => {
            if(error){
                throw error;
            }else{
                callback(null,rows);
            }
            conection.cerrarConexion();
        });
    }
}

cliente.getClienteLogin = (dataLogin,callback) => {
    con = conection.conMysql();
    if(con){
        const _correo = con.escape(dataLogin.correo);
        const _contraseña = con.escape(dataLogin.contraseña);
        var sql = `SELECT * FROM cliente WHERE correo = ${_correo} AND contraseña = ${_contraseña}`;
        con.query(sql, (error,rows) => {
            if(error){
                throw error;
            }else{
                callback(null,rows);
            }
            conection.cerrarConexion();
        });
    }
}

cliente.insertCliente = (clienteData,callback) => {
    con = conection.conMysql();
	if (con) 
	{
		con.query('INSERT INTO cliente SET ?', clienteData, (error, result) => {
			if(error){
				throw error;
			}else{
				callback(null, {"mensaje":"Cliente insertado"});
			}
            conection.cerrarConexion();
		});
	}
}

cliente.updateCliente = (id,datosCliente,callback) => {
    const _id = con.escape(id);
    const _nombres = con.escape(datosCliente.nombres);
    const _apellidos = con.escape(datosCliente.apellidos);
    const _direccion = con.escape(datosCliente.direccion);
    const _telefono = con.escape(datosCliente.telefono);
    const _correo = con.escape(datosCliente.correo);
    const _contraseña = con.escape(datosCliente.contraseña);

    con = conection.conMysql();
    if(con){
        var sql = `UPDATE cliente SET nombres=${_nombres}, apellidos=${_apellidos}, direccion=${_direccion}, telefono=${_telefono}, correo=${_correo}, contraseña=${_contraseña} WHERE cliente_id=${_id}`;
        con.query(sql, (error,rows) => {
            if(error){
                throw error;
            }else{
                callback(null,{"mensaje":"Actualizado"});
            }
            conection.cerrarConexion();
        });
    }
}

cliente.deleteCliente = (id,callback) => {

    con = conection.conMysql();
    if(con){
        const _id = con.escape(id);
        var sql = 'DELETE FROM cliente WHERE cliente_id = '+_id;
        con.query(sql, (error,rows) => {
            if(error){
                throw error;
            }else{
                callback(null,{"mesaje":"Borrado"});
            }
            conection.cerrarConexion();
        });
    }
}


module.exports = cliente;