const mysql = require('mysql');

const dbconfig = {
    host: "localhost",
    user: "root",
    password: "",
    database: "bdsbr_oriental"
}

let conexion;

function conMysql(){
    conexion = mysql.createConnection(dbconfig);

    conexion.connect((err)=>{
        if(err){
            console.log('[db err]', err);
        }else{
            console.log('DB CONECTADA!!')
        }
    });

    conexion.on('error', err => {
        console.log('[db err]',err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            conMysql();
        }else{
            throw err;
        }
    });
}

conMysql();

module.exports = conexion;