const { httpstatuscode } = require('./util/httpstatuscode');
const { routersReservations } = require('./routes/routesReservations');

const cors = require('cors');
const express = require('express');
require('dotenv').config();
const { PORT } = process.env;

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.use('/reservations', routersReservations);

app.get('/', (_req, res) => {
  res.status(httpstatuscode.OK).json("Tudo Certo :D");
});

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));