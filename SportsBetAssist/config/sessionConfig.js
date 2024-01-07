const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

module.exports = function (mongoUri) {
  const store = new MongoDBStore({
    uri: mongoUri,
    collection: 'sessions'
  });

  store.on('error', (error) => {
    console.error(error);
  });

  const sessionConfig = {
    secret: 'supersecret', // INPUT_REQUIRED: Use a secure, unique secret here
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      maxAge: 1000 * 60 * 60 * 2 // Expires in 2 hours
    }
  };

  return sessionConfig;
};
