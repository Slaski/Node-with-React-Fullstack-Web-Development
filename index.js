const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/user');
require('./services/passport');

const app = express();
mongoose
  .connect(keys.mongoURI)
  .then(() => console.log('Successfully connected to mongodb database.'))
  .catch(err => console.log(err));

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Started listening on port ${PORT}.`);
});
