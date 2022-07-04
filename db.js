const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'my_db'
});

connection.connect((error)=> {
	if(error) {
		console.error(`El error de conexion es: ${error}`)
			return
		
	}
	console.log('Conectado a la base de Datos con exito')
});


module.exports = connection;