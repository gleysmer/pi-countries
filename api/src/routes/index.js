const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countries = require('./countries.js');
const hola= require('./hola.js')
const activity= require('./activity')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use('/', hola);
router.use('/', countries);
router.use('/', activity);


module.exports = router;
