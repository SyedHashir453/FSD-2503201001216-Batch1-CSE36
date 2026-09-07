const fs = require("fs");

fs.appendFile("student.txt", "\nThis is updated student data.", (err) => {
    if (err) {
        console.log("Error updating file.", err);
        return;
    }

    console.log("File updated successfully!");
});