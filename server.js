"use strict"
const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
// const bodyParser = require('body-parser-xml');

const corsOptions = {
    origin: `http://localhost:${port}`
}

app.use(cors());
app.use(express.static("./color-schemes-js"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
// app.use(bodyParser({ limit: '100kb', xmlParseOptions: { explicitArray: false } }));


async function getRandomColorScheme() {
    // const endpoint = `https://www.colourlovers.com/api/palettes/random?format=json`
    const endpoint = "https://www.thecolorapi.com/scheme?hex=EEEEBB&format=json"
    try {
        const response = await fetch(endpoint);
        // return console.log(response);
        const returnedData = await response.json();
        // const receivedScheme = returnedData.colors;
        return returnedData
        // return console.log(returnedData.json())
        // return console.log(receivedScheme);
    } catch (error) {
        console.log(error);
    }
}

// app.use('/api/v1/getRandomScheme', async (req, res) => {
//   console.log(req.body); // Access the parsed XML object here
//   res.send('XML received!');
// });

app.use("/api/v1/getRandomColorScheme", async (request, response) => {
    response.status(200).json({
        status: 200,
        data: await getRandomColorScheme(),
    });
});

app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
    console.log("Press Ctrl-C to end thi process.");
})