const express = require('express');
const mongoose = require('mongoose'); 
const { MONGO_URI } = require('./config');

//DNTZPxW1Bgvmubod

// Routes 
const postRoutes = require('./routes/api/posts')

const app = express();

//BodyParser Middleware
app.use(express.json());

//Connect to MongoDB
mongoose.connect(MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

/*
app.get('/', (req, res) => {
    res.send('Hello from the other side of node');
});
*/

// Use Routes
app.use('/api/posts', postRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server run at port ${PORT}'));