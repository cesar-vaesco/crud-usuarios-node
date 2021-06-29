import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
    res.send(users);
}

export const getUserById = (req, res) => {
    /*     res.send(req.params) */
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser)
}

export const createUser = (req, res) => {

    const user = req.body;

    const iserWithId = { ...user, id: uuidv4() }

    users.push(iserWithId);

    res.send(`User with the name ${user.name} added to the databases!`);
}


export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id)

    res.send(`User with the ${id} delete from the database`)
}


export const updateUser = (req, res) => {
    const { id } = req.params;
    const { name, lastName, age } = req.body;
    const user = users.find((user) => user.id === id);

    if (name) user.name = name;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;

    res.send(`User with the id ${id} is modificated`)

}
