'use strict';

const firebase = require('firebase/app');
require('firebase/auth');

//For Sign Up (Make a account on Authenthication Firebase)
const signUp = (req, res) => {
  const { nama_lengkap, alamat_email, kata_sandi, no_telp } = req.body;
  firebase
    .auth()
    .createUserWithEmailAndPassword(alamat_email, kata_sandi)
    .then(async (userCredential) => {
      const user = userCredential.user;
      await user.updateProfile({ displayName: nama_lengkap });
      res.status(200).json({
        code: 200,
        userRecord: user,
      });
    })
    .catch((error) => {
      res.status(400).json({
        code: 400,
        error: error.message,
      });
    });
};

//For Sign In (Log in with Account (using email))
const signIn = (req, res) => {
  const { alamat_email, kata_sandi } = req.body;
  firebase
    .auth()
    .signInWithEmailAndPassword(alamat_email, kata_sandi)
    .then((userCredential) => {
      const user = userCredential.user;
      res.status(200).json({
        code: 200,
        userCredential: user,
      });
    })
    .catch((error) => {
      res.status(400).json({
        code: 400,
        error: error.message,
      });
    });
};

//For Sign Out (Log out)
const signOut = (req, res) => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      res.status(200).json({
        code: 200,
        message: 'User signed out',
      });
    })
    .catch((error) => {
      res.status(400).json({
        code: 400,
        error: error.message,
      });
    });
};

module.exports = {
  signUp,
  signIn,
  signOut,
};
