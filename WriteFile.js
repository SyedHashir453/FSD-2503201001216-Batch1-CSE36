const fs = require("fs");

fs.writeFile("student.txt", "Hello, I am a student.", (err) => {
    if (err) {
        console.log("Error writing file.", err);
        return;
    }

    console.log("File written successfully!");
});