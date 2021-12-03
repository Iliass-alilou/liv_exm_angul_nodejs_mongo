const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
var morgan = require('morgan')
const path = require("path")
const machineRouter = require('./routers/machine')


//Routers

const port = process.env.PORT || 3001;
const db_hosted = 'mongodb://iliass_mongodb:iliass_mongodb_2022@cluster0-shard-00-00.nzyhl.mongodb.net:27017,cluster0-shard-00-01.nzyhl.mongodb.net:27017,cluster0-shard-00-02.nzyhl.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-d93pcc-shard-0&authSource=admin&retryWrites=true&w=majority'

app.use(bodyParser.json());
app.use(morgan('dev'))
app.use(cors());
app.use(express.json());


///uses
app.use("/machines", machineRouter)
app.use("/",express.static(path.join("angular")))



mongoose.connect(db_hosted, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

app.get("/", (req, res) => {
    res.send("welcome")
    res.sendFile(path.join(__dirname,"angular","index.html"))
})

app.listen(port, () => {
    console.log('app running on port ' + port);
})