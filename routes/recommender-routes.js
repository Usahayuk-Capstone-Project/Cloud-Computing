const express= require('express');
const { 
    AddRecommender,
    GetRecommender
} = require('../controllers/recommenderController');

const router = express.Router();

router.post('/:uid',AddRecommender);
router.get('/:uid',GetRecommender);


module.exports = {
    routes : router
}