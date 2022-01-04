const express = require("express");
const app = express();
const port = 5000;
app.listen(port, (erreur) => {
  erreur
    ? console.log("Server connexion failed", erreur)
    : console.log("Server connexion done");
});
