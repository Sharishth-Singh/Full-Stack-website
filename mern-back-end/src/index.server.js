const express = require('express');
const app = express();
const env= require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');

// endiromenth vari
env.config();
app.use(bodyParser());
app.use('/api',authRoutes);
app.use('/api',adminRoutes);
// connection
// mongodb+srv://root:<password>@cluster0.kvo6v.mongodb.net/?retryWrites=true&w=majority
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.kvo6v.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
        // useCreateIndex: true
    }
).then(()=>{
    console.log('Database Connected');
});

app.listen(process.env.PORT,() =>{
    console.log(`Server is running on PORT ${process.env.PORT}`);
})
