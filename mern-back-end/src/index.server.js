const express = require('express');
const app = express();
const env= require('dotenv');
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');
const categoryRoutes = require('./routes/category');
// endiromenth vari
env.config();
app.use(express.json());
app.use('/api',authRoutes);
app.use('/api',adminRoutes);
app.use('/api',categoryRoutes);

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
