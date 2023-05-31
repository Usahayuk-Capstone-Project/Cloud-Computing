'use strict';

const getAuth = require('firebase-admin');

//For get one user with id in database
const GetUser = async (req, res, next) => {
    try {
        const uid = req.params.uid;
        const user = await getAuth.auth().getUser(uid);
        const data = await user.toJSON();
        if (data) {
            res.status(200).send({code: 200, user : user});
        } else {
            res.status(404).send('User not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

//For update data user with id in database
const UpdateUser = async (req, res, next) => {
    const {nama_lengkap, alamat_email, kata_sandi} = req.body;
    try {
        const uid = req.params.uid;
        const Record = await getAuth.auth().updateUser(uid, {
            displayName : nama_lengkap,
            email : alamat_email,
            password : kata_sandi
        });
        res.status(200).send({message: 'User record updated successfuly', Record : Record});
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    GetUser,
    UpdateUser
};