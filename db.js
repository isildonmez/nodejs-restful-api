const connectionUrl = process.env.MONGO_URL

var mongoose = require('mongoose');
mongoose.connect(connectionUrl, { useNewUrlParser: true });