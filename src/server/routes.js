var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

const createTechnique = (req, res) => {

};

const findAllTechniques = (req, res) => {

};

const findTechniqueByCategory = (req, res, id) => {

};

const deleteTechnique = (req, res, id) => {

};

router.post('/create', createTechnique);
router.get('/', findAllTechniques);
router.get('/:category', findTechniqueByCategory);
router.delete('/delete', deleteTechnique);

module.exports = router;
