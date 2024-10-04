require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const sequelize = require('./src/config/database');
const userRoutes = require('./src/routes/photoRouter');
const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors());
/* app.use(morgan('dev')); */
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api', userRoutes);

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log('Server is running on port ' + port);
  });
});