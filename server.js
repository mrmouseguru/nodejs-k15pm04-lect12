import http from "http"

let server = http.createServer();


//default: GET
const handleRequest = (req, res) =>{
    console.log(`Got a request for ${req.method} ${req.url}`);
};

server.on("request", handleRequest);

server.listen(9999, () =>{
    console.log("Now listening on port 9999 ....");
});