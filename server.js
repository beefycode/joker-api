const express = require("express");
const app = express();
    
require("./config/mongoose.config");
    
app.use(express.json(), express.urlencoded({ extended: true }));
    
const jokeRoutes = require("./routes/joke.routes");
jokeRoutes(app);
    
app.listen(8001, () => console.log("The server is all fired up on port 8001"));
