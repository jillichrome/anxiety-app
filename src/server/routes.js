const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Technique = require('./schema');

const createTechnique = (req, res) => {
  const technique = new Technique(req.body);
  technique.save((err, result) => {
    if(err) {
      return res.status(400).send({msg: "Failed to create Technique"});
    }
    return res.status(200).send({msg: "New technique saved"});
  })
};

const findAllTechniques = async(req, res) => {
  try {
    await Technique.find().then(tech => {
      let ideas = [];
      tech.forEach(elem => {
        if(elem.techniques.length === 0) {
          return;
        } else {
          ideas.push(elem.techniques);
        }
      })
      return ideas;
    })
  } catch(error) {
    console.log(error);
  }
};

const findTechniquesByCategory = async(req, res) => {
  try {
    const results = await Technique.where('category').equals(req.params.category);
    console.log(results);
    return results;
  } catch(error) {
    console.log(error);
  }
};

const findRandomTechnique = async(req, res) => {
  try {
    await Technique.count().exec(function(err, count) {
      const random = Math.floor(Math.random * count);
      Technique.findOne().skip(random).exec(function(err, result) {
        console.log(result);
        return result;
      })
    })
  } catch(error) {
    console.log(error);
  }
};

const deleteTechnique = async(req, res) => {
  try {
    await Technique.updateOne( {}, { $pull: {post: {_id: req.params._id}}});
    return res.status(204);
  } catch(error) {
    console.log(error);
  }
};

router.post('/create', createTechnique);
router.get('/', findAllTechniques);
router.get('/:category', findTechniquesByCategory);
router.get('/', findRandomTechnique);
router.delete('/delete', deleteTechnique);

module.exports = router;
