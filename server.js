const express = require('express');
const db = require('./db');
const app = express();
const userLoginRouter = require('./routes/userLogin');
const userDetailsRouter = require('./routes/userDetailsRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cors = require('cors');
const { UserDetails } = require('./services/userDetailsService');
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use('/api/userLogin', userLoginRouter);
app.use('/api/userDetails', userDetailsRouter);

app.listen(3000);