'use strict';

const firebase = require('../db');
const firestore = firebase.firestore();

//For Add Article to Firestore (Database)
const AddArticle = async (req, res, next) => {
  const uid = req.params.uid;
  try {
    const { title, tags, content } = req.body;
    const createdAt = new Date().toISOString();
    const updateAt = createdAt;
    const data = {uid, title, tags, content, createdAt, updateAt};
    await firestore.collection('articles').doc(uid).set(data);
    res.status(200).send({ message: 'Article added successfully' });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//For Get Article from Firestore (Database)
const GetArticle = async (req, res, next) => {
    const uid = req.params.uid;
    try {
      const userDocRef = await firestore.collection('articles').doc(uid);
      const data = await userDocRef.get();
      if (data.exists) {
        res.status(200).send({ code: 200, user: data.data() });
      } else {
        res.status(404).send('Article does not exist!');
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
  //For Update Article in Firestore (Database)
  const UpdateArticle = async (req, res, next) => {
    const uid = req.params.uid;
    try {
      const data = req.body;
      const userDocRef = await firestore.collection('articles').doc(uid);
      await userDocRef.update(data);
      res.status(200).send({ message: 'Article updated successfully' });
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
  
  module.exports = {
    AddArticle,
    GetArticle,
    UpdateArticle
  };
  