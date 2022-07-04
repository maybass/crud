const express =  require('express');
const app = express();
const hbs = require('hbs')

app.set('view engine' , 'hbs');


//le decimos a node como vamos a invocar los datos de los formularios

app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));


app.use(require('./routes'))// ver luego
app.listen(3000, () => {
	console.log('servidor ok en http://localhost:3000')
	
	
})