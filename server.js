import http from "http"

let server = http.createServer();

server.listen(9999, () =>{
    console.log("Now listening on port 9999 ....");
});