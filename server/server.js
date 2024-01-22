const express = require("express");
const cors = require("cors");
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(
    cors({
        //Allows different ports to send requests to our API
        origin: "http://localhost:3000",
    }),
);

// requires mongoose config file so that its available to our express method
require("./config/mongoose.config");
// // requires our routes folder which houses a function with parameter of app. Epxress muse be added as argument
require("./routes/manager.routes")(app);


app.listen(8000, () => {
    console.log("listening on port 8000")
});