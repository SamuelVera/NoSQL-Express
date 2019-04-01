const express = require('express');
const router = express.Router();
const { getAllCategorias, getAllApps } = require('../controller/readController')

router.get('/', (req, res) => {
  res.render('home', {title: 'NoSQL'})
})

module.exports = router;