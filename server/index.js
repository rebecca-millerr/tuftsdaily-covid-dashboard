const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const apiPort = process.env.PORT || 5000;
const sheetsRouter = require('./routes/sheets-router');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use('/api', sheetsRouter);

// this is for creating static webpage
app.use(express.static(path.join(__dirname, "/../client/build")));

// this is for creating static webpage in prod
if (process.env.PORT) {
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname + "/../client/build/index.html"));
    });
}
else { // dev
    app.get('/', (req, res) => {
        res.send("Hello world!");
    });
}

app.listen(apiPort, () => console.log("server running on port 5000"));
