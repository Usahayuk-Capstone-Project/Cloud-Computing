'use strict';

const firebase = require('../db');
const firestore = firebase.firestore();

//For Add Recommender to Firestore (Database)
const AddRecommender = async (req, res, next) => {
  const uid = req.params.uid;
  try {
    const {skala_usaha, modal_usaha, 
      bidang_usaha, omset_usaha, usia_targetpelanggan, 
      gender_targetpelanggan, pekerjaan_targetpelanggan,
      status_targetpelanggan, jenis_lokasi_ } = req.body;
    await firestore.collection('users').doc(uid).set({
      user_id : "",
      jenis_usaha : "",
      skala_usaha : skala_usaha,
      modal_usaha : modal_usaha,
      bidang_usaha : bidang_usaha,
      omset_usaha : omset_usaha,
      usia_targetpelanggan : usia_targetpelanggan,
      gender_targetpelanggan : gender_targetpelanggan,
      pekerjaan_targetpelanggan : pekerjaan_targetpelanggan,
      status_targetpelanggan : status_targetpelanggan,
      jenis_lokasi_ : jenis_lokasi_ ,
  });
    res.status(200).send({ message: 'User record updated successfully' });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//For Get Recommender from Firestore (Database)
const GetRecommender = async (req, res, next) => {
  const uid = req.params.uid;
  try {
    const userDocRef = await firestore.collection('users').doc(uid);
    const data = await userDocRef.get();
    if (data.exists) {
      res.status(200).send({ code: 200, user: data.data() });
    } else {
      res.status(404).send('Document does not exist!');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  AddRecommender,
  GetRecommender
};
