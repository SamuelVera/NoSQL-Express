const express = require('express');
const router = express.Router();
const { catchErrors } = require('../handlers/errorHandlers')
const { getAllCategorias, getAllApps, getProgramador, getApp, getAppsByCategoria, getAllUsers } = require('../controller/readController')
const { goToCreateApp } = require('../controller/variableController')
const { saveApp } = require('../controller/createController')

router.get('/', catchErrors(getAllCategorias))
router.get('/getAllApp', catchErrors(getAllApps))
router.get('/getAllUsers', catchErrors(getAllUsers))
router.get('/verProgramador/:_id', catchErrors(getProgramador))
router.get('/verApp/:_id', catchErrors(getApp))
router.get('/getAppsByCategoria/:_id', catchErrors(getAppsByCategoria))
router.get('/crearApp/:_id', catchErrors(goToCreateApp))
router.post('/crearApp/:_id', catchErrors(saveApp))

module.exports = router;