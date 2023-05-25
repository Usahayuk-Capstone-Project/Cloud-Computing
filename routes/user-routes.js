const express= require('express');
const { 
    GetUser, 
    UpdateUser 
} = require('../controllers/userController');

const router = express.Router();

router.get('/:uid', GetUser);
router.put('/:uid', UpdateUser);

module.exports = {
    routes : router
}