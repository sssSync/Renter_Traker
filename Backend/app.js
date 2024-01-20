const express = require('express');
const app = express();
const PORT = 3000; // You can change the port if needed
const connectDB = require('../Backend/connect_DB/conn');
// const userRoutes = require('./routes/userRouter');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
// Middleware to parse JSON requests
app.use(express.json());

connectDB();
// app.use('/', userRoutes);


app.get('/',(req,res)=>{
    res.send(`
    <h1>This page is working</h1>
    `)
})


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
