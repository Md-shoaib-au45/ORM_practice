require('app-module-path').addPath(__dirname);
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const config = require(`config/dev.json`); // change dev to production if deploying

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

const userRouter = require("./routes/router");

app.get('/', (req, res) => {
  res.send('vms-api');
});
app.use(userRouter);

process.on('unhandledRejection', (error) => {
  console.log('unhandledRejection', { error });
});

process.on('uncaughtException', (error) => {
  console.log('uncaughtException', { error });
});

app.listen(config.port, () => {
  console.log(`Express server listening on port ${config.port}`);
});
