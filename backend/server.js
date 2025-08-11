const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://Kaustubh:123kau456stubh@userchef.5uxmhys.mongodb.net/?retryWrites=true&w=majority&appName=UserChef', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use(cors());
app.use(express.json());

const contactRoutes = require('./routes/contactRouter.js'); 
const userRoutes = require('./routes/userRoutes.js');    
const orderRoutes = require('./routes/orderRoutes.js');


app.use('/', contactRoutes);
app.use('/', userRoutes);
app.use('/api', orderRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
