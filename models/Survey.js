const mongoose = require('mongoose');

const recipientSchema = new mongoose.Schema({
  email: String,
  responded: { type: Boolean, default: false }
});

const surveySchema = new mongoose.Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [recipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  dateSent: Date,
  lastResponded: Date
});

mongoose.model('surveys', surveySchema);
