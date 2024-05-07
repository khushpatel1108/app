const express = require('express')
const app = express();
require("dotenv").config();
const connectDb = require("./config/db");
const cookieParser =require('cookie-parser');
const userRoutes = require('./routes/user.routes');
const postRoutes = require('./routes/post.routes');


const PORT = process.env.PORT
connectDb();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);


app.get("/", (req, res) => {
    res.json(
      `App is running is on ${PORT}`
    );
  });


app.listen(PORT,()=>{
    console.log(`runnig on ${PORT}`);
})