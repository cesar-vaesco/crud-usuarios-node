import express from 'express';


import { createUser, getUsers, getUserById, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router();

let users = [];


// http://localhost:5000/users/
router.get('/', getUsers);

router.post('/', createUser);

// http://localhost:5000/users/test  -- testeando la ruta
router.get('/:id', getUserById);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);


export default router;
