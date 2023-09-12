const express = require("express");
const router = express();
const http = require('http');
const cors = require('cors');
require('dotenv').config();

router.use(express.static('public'));
router.use(express.urlencoded({ extended:false }));
router.use(express.json());
router.use(cors());

router.get('/', async (req,res,next) => {
  res.json({"status":"iniciar"});
});




// Servidor HTTP
router.listen(3001, () => {
  console.log("Aplicación ejecutandose ....");
});
