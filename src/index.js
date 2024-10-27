const express = require('express');
const morgan = require('morgan');

const app = express();

//global
app.set("port",process.env.PORT || 3000);

//config
app.use(morgan("dev"));
app.use(express.json()); //hace que use json

//endpoints
app.use(require("./routes"));
app.use(require("./routes/auth"));
app.use(require("./routes/cliente"));
app.use(require("./routes/producto"));
app.use(require("./routes/imagenes"));

//server
app.listen(app.get("port"), () => {
    console.log(`Server Running at port ${app.get("port")}`);
})