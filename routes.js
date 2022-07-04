const express = require('express');
const router = express.Router();

const connection = require('./database/db')

router.get('/', (req,res)=> {
	
	connection.query('SELECT * FROM  users' , (error, results) => {
  if (error) throw error;
  res.render('index' , {results : results});
});

})


//ruta para crear registros
router.get('/create' , (req, res)=> {
	res.render('create' , {
		titulo: 'POST- CREATE'
	})
	
})

//ruta para editar registros

router.get('/edit/:id', (req,res)=> {
	const id=req.params.id;
		connection.query('SELECT * FROM  users WHERE id=?' ,[id], (error, results) => {
  if (error) throw error;
  res.render('edit' , {user : results[0]});
});
})


const crud= require('./controllers/crud')
router.post('/save' , crud.save)

module.exports = router;