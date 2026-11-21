import http from "http";

const server = http.createServer((req, res) => {

    if (req.method === "POST" && req.url === "/students") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>Student created</h1>");
        res.end();
    }

    else if (req.method === "GET" && req.url === "/students") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>Students list</h1>");
        res.end();
    }

    else if (req.method === "GET" && req.url.startsWith("/students/")) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>Student Details</h1>");
        res.end();
    }

    else if (req.method === "PUT" && req.url.startsWith("/students/1")) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>Student updated</h1>");
        res.end();
    }

    else if (req.method === "DELETE" && req.url.startsWith("/students/1")) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>Student deleted</h1>");
        res.end();
    }

    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<h1>Page not found</h1>");
        res.end();
    }

}); // <-- important

server.listen(4000, () => {
    console.log("Server running on http://localhost:4000/students");
});