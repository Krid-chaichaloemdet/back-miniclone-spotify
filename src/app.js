require('dotenv').config();

const userRoute = require('./routes/user-route')
const rateLimitMiddleware = require('./middlewares/rate-limit')
const express = require('express');
const cors = require('cors')
const morgan = require('morgan')

const app = express();

app.use(cors());
app.use(morgan('dev'))
app.use(rateLimitMiddleware)
app.use(express.json());

app.use('/user',userRoute)

const PORT = process.env.PORT || '5000';

app.listen(PORT, () => console.log(`server runnig on port: ${PORT}`));
