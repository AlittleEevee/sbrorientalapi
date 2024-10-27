const con = require('../db/mysql');

var cliente = {}

cliente.getCliente = (callback) => {
    if(con){
        con.query('SELECT * FROM cliente', (error,rows) => {
            if(error){
                throw error;
            }else{
                callback(null,rows);
            }
        });
    }
}

cliente.getClienteById = (id,callback) => {
    if(con){
        const _id = con.escape(id);
        var sql = 'SELECT * FROM cliente WHERE cliente_id = '+_id;
        con.query(sql, (error,rows) => {
            if(error){
                throw error;
            }else{
                callback(null,rows);
            }
        });
    }
}

cliente.getClienteLogin = (dataLogin,callback) => {
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
        });
    }
}

cliente.insertCliente = function(clienteData,callback)
{
	if (con) 
	{
		con.query('INSERT INTO cliente SET ?', clienteData, (error, result) => {
			if(error){
				throw error;
			}else{
				callback(null, {"mensaje":"Cliente insertado"});
			}
		});
	}
}

cliente.updateCliente = (id,datosCliente,callback) => {
    const _id = con.escape(id);
    const _nombres = con.escape(datosCliente.nombres);
    const _apellidos = con.escape(datosCliente.apellidos);
    const _direccion = con.escape(datosCliente.telefono);
    const _telefono = con.escape(datosCliente.telefono);
    const _correo = con.escape(datosCliente.correo);
    const _contraseña = con.escape(datosCliente.contraseña);
    if(con){
        var sql = `UPDATE cliente SET nombres=${_nombres}, apellidos=${_apellidos}, direccion=${_direccion}, telefono=${_telefono}, correo=${_correo}, contraseña=${_contraseña} WHERE cliente_id=${_id}`;
        con.query(sql, (error,rows) => {
            if(error){
                throw error;
            }else{
                callback(null,{"mensaje":"Actualizado"});
            }
        });
    }
}

cliente.deleteCliente = (id,callback) => {
    if(con){
        const _id = con.escape(id);
        var sql = 'DELETE FROM cliente WHERE cliente_id = '+_id;
        con.query(sql, (error,rows) => {
            if(error){
                throw error;
            }else{
                callback(null,{"mesaje":"Borrado"});
            }
        });
    }
}

module.exports = cliente;