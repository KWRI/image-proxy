const app = require("./lib/image-proxy")();
const port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log("Listening on " + port);
});