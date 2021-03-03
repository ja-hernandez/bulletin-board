const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

var corsOptions = {
    origin: 'http://localhost:8081'    
};

app.use(cors(corsOptions));

//parse JSON
app.use(bodyParser.json());

//parse url encoded form data
app.use(bodyParser.urlencoded({extended: true}));

//first route
app.get("/", (req, res) => {
    res.json({ message: "Josie's place"});
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

