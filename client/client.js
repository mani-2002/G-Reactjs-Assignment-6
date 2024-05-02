var net = require("net");
var client = new net.Socket();

const makeGETRequest = () => {
  client.connect(5000, "localhost", () => {
    console.log("Connected");
    client.write("GET /get?a=1 http/1.0\r\n\r\n");
  });
};

const makePOSTRequest = () => {
  client.connect(3001, "localhost", function () {
    console.log("POST request sent");
    console.log("Connected");
    client.write(
      "POST /post?a=1 HTTP/1.0\r\n" +
        "Content-Type: application/x-www-form-urlencoded\r\n" +
        "Content-Length: 7\r\n" +
        "\r\n" +
        "a=7&b=9\r\n"
    );
  });
};

// makeGETRequest();
makePOSTRequest();

client.on("data", function (data) {
  console.log("Received " + data.length + " bytes\n" + data);
});

client.on("close", function () {
  console.log("Connection close");
});
