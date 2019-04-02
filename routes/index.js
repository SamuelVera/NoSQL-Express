const express = require('express');
const router = express.Router();
const { catchErrors } = require('../handlers/errorHandlers')
const { getAllCategorias, getAllApps, getProgramador, getApp, getAppsByCategoria } = require('../controller/readController')

router.get('/', catchErrors(getAllCategorias))
router.get('/getAllApp', catchErrors(getAllApps))
router.get('/verProgramador/:_id', catchErrors(getProgramador))
router.get('/verApp/:_id', catchErrors(getApp))
router.get('/getAppsByCategoria/:_id', catchErrors(getAppsByCategoria))

module.exports = router;