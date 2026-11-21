const http=require('http');
const students= [];
const server=http.createServer((req,res)=>{
    const {method,url}=req;
    if(method==='POST' && url==='/students'){
        let body="";
        req.on("data",(chunk)=>{
            body+=chunk.toString();
        });
        req.on("end",() => {
            const newStudent=JSON.parse(body);
            students.push(newStudent);
            res.writeHead(200,{'Content-type':'application/json'});
            res.end(JSON.stringify({
                    message:"Student created successfully",
                    data: newStudent,
                }));
            });
        }
//read all students
else if(method==='GET' && url==="/students"){
    res.writeHead(200,{"Content-type":"application/json"});
    res.end(JSON.stringify({
        message:"All students fetched successfully",
        data:students,
    }),
);
}
//read a student by id
else if(method==='GET' && url.startsWith("/students")){
    const studentId=parseInt(url.split("/")[2]);
    const student=students.find((stu)=>stu.id===studentId);
if(student){
    res.writeHead(200,{"Content-type":"application/json"});
    res.end(
        JSON.stringify({
            message:"Student fetched successfully",
            data:student,
        }),
    );
}
else{
    res.writeHead(404,{"Content-type":"application/json"});
    res.end(JSON.stringify({message:"Student not found"}));
}
}
//update a student by id
else if(method==='PUT' && url.startsWith("/students/")){
    const studentId=parseInt(url.split("/")[2]);
    const studentIndex=students.findIndex(stu =>stu.id===studentId);
    //collecting payload
    let body="";
    req.on("data",(chunk)=>{
        body+=chunk.toString();
    });
    req.on("end",()=>{
        if(studentIndex!== -1){
            const updateStudent={
                ...students[studentIndex],
                ...body
            };
            students[studentIndex]=updateStudent;
            res.writeHead(200,{"Content-type":"application/json"});
            res.end(
                JSON.stringify({
                    message:"Student updated successfully",
                    data:updateStudent,
                }),
            );
        }else{
            res.writeHead(404,{"Content-type":"application/json"});
            res.end(JSON.stringify({messgae:"Student not found"}));
        }
        });
        }
        //delete a student by id
else if(method==='DELETE' && url.startsWith("/students")){
    const studentId=parseInt(url.split("/")[2]);
    const studentIndex=students.findIndex((stu)=>stu.id===studentId);
    if(studentIndex!==-1){
        const studentdeleted=students.splice(studentIndex,1);
        res.writeHead(200,{"Content-type":"application/json"});
        res.end(JSON.stringify({
            message:"Student deleted successfully",
            data:studentdeleted,
        }),
    );
    }else{
        res.writeHead(404,{"Content-type":"application/json"});
        res.end(JSON.stringify({
            message:"Student not found"}));
    }
}
else{
    res.writeHead(404,{"Content-type":"application/json"});
    res.end(JSON.stringify({message:"Route not supported"}));
}
});
server.listen(3000,()=>{
    console.log("Server running at http://localhost:3000/students");
});