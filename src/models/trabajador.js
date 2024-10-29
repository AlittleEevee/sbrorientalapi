const conection = require('../db/mysql');

var trabajador = {}

trabajador.getTrabajador = (callback) => {
    con = conection.conMysql();
    if(con){
        con.query('SELECT * FROM trabajador', (error,rows) => {
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

trabajador.getTrabajadorById = (id,callback) => {
    con = conection.conMysql();
    if(con){
        const _id = con.escape(id);
        var sql = 'SELECT * FROM trabajador WHERE trabajador_id = '+_id;
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

trabajador.insertTrabajador = (trabajadorData,callback) => {
    con = conection.conMysql();
	if (con) 
	{
		con.query('INSERT INTO trabajador SET ?', trabajadorData, (error, result) => {
			if(error){
				throw error;
			}else{
				callback(null, {status:"success"});
			}
            conection.cerrarConexion();
		});
	}
}

trabajador.updateTrabajador = (id,datosTrabajador,callback) => {
    const _id = con.escape(id);
    const _nombre = con.escape(datosTrabajador.nombre);
    const _telefono = con.escape(datosTrabajador.telefono);
    const _correo = con.escape(datosTrabajador.correo);
    const _dni = con.escape(datosTrabajador.dni);

    con = conection.conMysql();
    if(con){
        var sql = `UPDATE trabajador SET nombre=${_nombre}, telefono=${_telefono}, correo=${_correo}, dni=${_dni} WHERE trabajador_id=${_id}`;
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

trabajador.deleteTrabajador = (id,callback) => {

    con = conection.conMysql();
    if(con){
        const _id = con.escape(id);
        var sql = 'DELETE FROM trabajador WHERE trabajador_id = '+_id;
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


module.exports = trabajador;