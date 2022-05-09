const express = require("express");
const colors = require("colors");
const dotenv = require('dotenv').config()
const goals = require('./routes/goalsRoutes')
const port = process.env.PORT || 5000;
const {dbConnect} =require('./config/db')
const {errorHandler} = require("./middelware/errorMiddleware")
const app = express();
dbConnect();
app.use(express.json());
app.use(express.urlencoded({extended :false}));
app.use(errorHandler);

app.use('/api/goals',require('./routes/goalsRoutes'))



app.listen(port, () => {
    console.log(`sarver stared on port ${port}`)
});