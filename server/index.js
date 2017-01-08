const express = require('express')
const app = express()
const port = process.env.STUB_PORT || 3000;

// Body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Router
const router = express.Router();
const { addRoutesToRouter } = require('./routes')

addRoutesToRouter(router)

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', router);

// Error Handler
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(err.status).send({
    status: err.status,
    messages: err.message,
  })
})

// Listen on port
app.listen(port, function () {
  console.log(`Stub Server listening on port ${port}!`)
})

// for testing
module.exports = app;
