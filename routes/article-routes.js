const express= require('express');
const { 
    AddArticle,
    GetArticle,
    UpdateArticle
} = require('../controllers/articleController');

const router = express.Router();

router.post('/:uid',AddArticle);
router.get('/:uid',GetArticle);
router.put('/:uid',UpdateArticle);


module.exports = {
    routes : router
}