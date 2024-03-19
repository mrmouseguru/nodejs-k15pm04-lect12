import express from "express"

let app = express();

app.get("/", (req, res) =>{
    res.send("Hello from Express Server");
});

//GET: /api/text => read content from myfile.txt => response to client

//json
app.get("/api/test" , (req, res) =>{
    res.json({
        text: "Hello",
        num : 8888
    });
});

app.get("/api/students/:binky", (req, res) => {
    let studentId = req.params.binky;
    let name = req.query.name;

    console.log("Student Id: " , studentId);
    console.log("Name: ", name);
    res.json({
        message: `Hello ${studentId}`,
        name: `${name}`
    });
});


app.use("/files", express.static("public"));

app.listen(8888, () => {
    console.log("Now listening on port 8888 ...")
});