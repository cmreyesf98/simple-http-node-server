let http = require("http");
let fs = require("fs");
const port = 3000;

let requestHandler = (request, response) => {
  fs.writeFile("hello-world.txt", "Hello to this happy world!", err => {
    if (err) {
      return console.log(`Error: ${err}`);
    }
    console.log("Success!");
  });
};

const server = http.createServer(requestHandler());

server.listen(port, err => {
  if (err) {
    return console.log(`${err}`);
  } else {
    console.log(`server is listening on ${port}`);
  }
});
