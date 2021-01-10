const express = require('express');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const cors = require('cors');
const plaid = require('plaid');

const app = express();
app.use(cors())
app.use(bodyParser.json());


const client = new plaid.Client({
    clientID: keys.PLAID_CLIENT_ID,
    secret: keys.PLAID_SECRET,
    env: plaid.environments.sandbox
  });



const PORT = 5000;

app.listen(PORT, () => console.log(`listening on port ${PORT}!`));
