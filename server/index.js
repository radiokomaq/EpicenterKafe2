
const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/user.routes');
const tablesRouter = require('./routes/tables.routes');
const reservationRouter = require('./routes/reservation.routes');
const menuKafeRouter = require('./routes/menuKafe.routes');
const reviewRouter = require('./routes/reviewKafe.routes');

const PORT = process.env.PORT || 8080

const app = express()
app.use(cors());
app.use(express.json())
app.use('/api', userRouter)
app.use('/api', tablesRouter)
app.use('/api', reservationRouter)
app.use('/api', menuKafeRouter)
app.use('/api', reviewRouter)

app.listen(PORT, () => console.log(` server started on port ${PORT}`));