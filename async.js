import fs from 'fs/promises';

console.log("Program Started");

async function handleFileOperations() {
    
    await fs.writeFile("sample.txt", "Hello World");

    
    const data = await fs.readFile("sample.txt", "utf8");

    console.log("File Content:");
    console.log(data);
}


handleFileOperations();

console.log("Program Ended");