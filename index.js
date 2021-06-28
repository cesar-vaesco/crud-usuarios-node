import express from 'express';
import bodyParser from 'body-parser';
import colors from 'colors';

import usersRoutes from './routes/users.js';

const app = express();

const PORT = 5000;
app.use(express.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => res.send('Hola, esta es la página principal'))

app.listen((PORT), () => {

    console.log('\nServer started on port:'.cyan, ` http://localhost:${PORT}\n`.green);

});
