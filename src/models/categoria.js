const conection = require('../db/mysql');


var categoria = {}

categoria.getCategoria = (callback) => {
    con = conection.conMysql();
    if(con){
        con.query('SELECT * FROM categoria', (error,rows) => {
            if(error){
                throw error;
            }else{
                callback(null,rows);
            }
            conection.cerrarConexion();
        });
    }
}

categoria.getCategoriaById = (id,callback) => {
    con = conection.conMysql();
    if(con){
        const _id = con.escape(id);
        var sql = 'SELECT * FROM categoria WHERE categoria_id = '+_id;
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

categoria.insertCategoria = (categoriaData,callback) => {
    con = conection.conMysql();
	if (con) 
	{
		con.query('INSERT INTO categoria SET ?', categoriaData, (error, result) => {
			if(error){
				throw error;
			}else{
				callback(null, {"mensaje":"categoria insertado"});
			}
            conection.cerrarConexion();
		});
	}
}

categoria.updateCategoria = (id,datosCategoria,callback) => {
    const _id = con.escape(id);
    const _nombre = con.escape(datosCategoria.nombre);

    con = conection.conMysql();
    if(con){
        var sql = `UPDATE categoria SET nombre=${_nombre} WHERE categoria_id=${_id}`;
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

categoria.deleteCategoria = (id,callback) => {

    con = conection.conMysql();
    if(con){
        const _id = con.escape(id);
        var sql = 'DELETE FROM categoria WHERE categoria_id = '+_id;
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

module.exports = categoria;