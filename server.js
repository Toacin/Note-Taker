const express = require("express");
const routes = require("./routes")

// instance of server created here with PORT
const app = express();
const PORT = process.env.PORT || 3001;

// encryption middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// static file and routes middleware
app.use(express.static('public'));
app.use(routes)

// start server
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);