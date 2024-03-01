const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const crudRoutes = require('./routes/crud');
const app = express();
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api/crud', crudRoutes); 
mongoose.connect('mongodb://localhost:27017/nodejs_example', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
