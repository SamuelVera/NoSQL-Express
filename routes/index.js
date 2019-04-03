const express = require('express');
const router = express.Router();
const { catchErrors } = require('../handlers/errorHandlers')
const { getAllCategorias, getAllApps, getProgramador, getApp, getAppsByCategoria, getAllUsers,
        getUser } = require('../controller/readController')
const { goToCreateApp, goToAddToWishList, goToDownloadApp, lookForUpdate,
        goToAddCreditCard, goToUpdateUser } = require('../controller/variableController')
const { addToWishList, downloadApp, addCreditCard, updateUser } = require('../controller/updateController')
const { saveApp } = require('../controller/createController')

router.get('/', catchErrors(getAllCategorias))
router.get('/getAllApp', catchErrors(getAllApps))
router.get('/getAllUsers', catchErrors(getAllUsers))
router.get('/verProgramador/:_id', catchErrors(getProgramador))
router.get('/verApp/:_id', catchErrors(getApp))
router.get('/getAppsByCategoria/:_id', catchErrors(getAppsByCategoria))
router.get('/crearApp/:_id', catchErrors(goToCreateApp))
router.post('/crearApp/:_id', catchErrors(saveApp))
router.get('/verUser/:_id', catchErrors(getUser))
router.get('/addToWishlist/:_id', catchErrors(goToAddToWishList))
router.post('/addToWishlist/:_id', catchErrors(addToWishList))
router.get('/downloadApp/:_id', catchErrors(goToDownloadApp))
router.post('/downloadApp/:_id', catchErrors(downloadApp))
router.get('/updateApp/:appId/:versionId', catchErrors(lookForUpdate))
router.get('/addCreditCard/:_id',catchErrors(goToAddCreditCard))
router.post('/addCreditCard/:_id',catchErrors(addCreditCard))
router.get('/updateUser/:_id', catchErrors(goToUpdateUser))
router.post('/updateUser/:_id', catchErrors(updateUser))
router.get('/getAllProgramadores',catchErrors())
router.get('/addUser',catchErrors())
router.post('/addUser',catchErrors())

module.exports = router;