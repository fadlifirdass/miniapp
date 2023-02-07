const express = require('express')
const router = express.Router()
const {
    getUsers, createUser, updateUser, updateData, deleteUser
} = require ('../controller/method');
const valid = require('../controller/scheme')

router.get('/',valid,getUsers);
router.get('/:username/:id', getUsers);
router.post('/create', createUser);
router.put('/updateUser', updateUser);
router.patch('/updateData/:id', updateData);
router.delete('/delete/:id', deleteUser);

module.exports = router;