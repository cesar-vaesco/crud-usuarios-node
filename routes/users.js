import express from 'express';

import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const users = [];


// http://localhost:5000/users/
router.get('/', (req, res) => {
    res.send(users);
});


// http://localhost:5000/users/test  -- testeando la ruta
router.get('/:id', (req, res) => {

    /*     res.send(req.params) */

    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser)

});


router.post('/', (req, res) => {

    const user = req.body;


    const iserWithId = { ...user, id: uuidv4() }

    users.push(iserWithId);

    res.send(`User with the name ${user.name} added to the databases!`);
})


export default router;
