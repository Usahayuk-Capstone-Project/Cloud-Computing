'use strict';
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const admin = require("firebase-admin");
const serviceAccount = require("./ccusahayuk-firebase-adminsdk-5cq5j-ac768332f1.json");

// Firebase Admin initialization
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

//Routes
const userRoutes = require('./routes/user-routes');
const authRoutes = require('./routes/auth-routes');
const recommenderRoutes = require('./routes/recommender-routes');
const articleRoutes = require('./routes/article-routes');

app.use('/api/user', userRoutes.routes);
app.use('/api/auth', authRoutes.routes);
app.use('/api/recommender', recommenderRoutes.routes);
app.use('/api/article', articleRoutes.routes);

// set post and listen for our requests
app.listen(config.port,() => console.log('App is listening on url http://localhost:' + config.port))