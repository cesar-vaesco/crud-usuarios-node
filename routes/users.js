import express from 'express';

const router = express.Router();

const users = [
    {
        name: "John",
        lastName: "Doe",
        age: 25
    },
    {
        name: "Jane",
        lastName: "Doe",
        age: 24
    }

]


// http://localhost:5000/users/
router.get('/', (req, res) => {
    res.send(users);
});


router.post('/', (req, res) => {

    const user = req.body;

    users.push(user);

    res.send(`User with the name ${user.name} added to the databases!`);
})


export default router;
