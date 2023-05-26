const express= require('express');
const { 
    AddRecommender,
    GetRecommender,
    UpdateRecommender
} = require('../controllers/recommenderController');

const router = express.Router();

router.post('/:uid',AddRecommender);
router.get('/:uid',GetRecommender);
router.put('/:uid',UpdateRecommender)


module.exports = {
    routes : router
}