// TODO:
//This is the simplest form, where you make a GET request to retrieve data from a server.
//Key Points:

/*options: Defines the request details (hostname, port, path, method).
req.on('error'): Handles any errors.
req.end(): Finalizes the request.*/

const http = require("http");

const options = {
  hostname: "fakestoreapi.com",
  path: "/products/1",
  method: "GET",
};
const apiRes = http.request(options, (apiRes) => {
  apiRes.on("data", (data) => {
    console.log(data.toString());
  });
});

apiRes.on("error", () => {
  console.log(e);
});

apiRes.end();
