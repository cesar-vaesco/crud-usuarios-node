import express from 'express';

import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let users = [];


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
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id)

    res.send(`User with the ${ id } delete from the database`)
});


export default router;
