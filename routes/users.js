import express from 'express';

const router = express.Router();


// http://localhost:5000/users/
router.get('/', (req, res) => {
    res.send('hello...')
});


export default router;
