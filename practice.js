// const square =(n)=>n*n;

// const n =process.argv[2]

// console.log(process.argv)

// console.log(square(n))

// console.log(global);

//===========================================================================================================

// const os =require('os');

// console.log("Total Memory: ", os.totalmem() / 1024 / 1024 / 1024);
// console.log("Free Memory: ", os.freemem() / 1024 / 1024 / 1024);
// console.log("OS version: ", os.version());
// console.log("CPU: ", os.cpus());

//=========================================================================================FS=========================

// const fs=require("fs");

//create a single file using fs(file system)

// const quote = "Make hay while the sun shines";
// fs.writeFile("./msg.js", quote, (err) => {
//   console.log("Completed Creating!!");
// });

//************************************************ */

//create a multiple file using fs(file system)

// for (let i = 1; i <= 5; i++) {
//     fs.writeFile(`./sample/text-${i}.html`, quote, (err) => {
//       console.log(`Completed Creating ${i}!!`);
//     });
//   }
  
//create a multiple file using process.argv fs(file system)

// const n =process.argv[2]

// for (let i = 1; i <= n; i++) {
//     fs.writeFile(`./sample/text-${i}.html`, quote, (err) => {
//       console.log(`Completed Creating ${i}!!`);
//     });
//   }

//Read a single file using fs(file system)

// fs.readFile("./msg.html", "utf-8", (err, content) => {
//     if (err) {
//       console.log("X", err);
//     }
//     console.log("Here : ", content);
// });

//Update a msg to the file using fs(file system)

// fs.appendFile("./msg.html", quote1, (err) => {
//     console.log("Updated File!!");
//   });
  
//Delete a single file using fs (file system)

// fs.unlink("./cool.txt", (err) => {
//     console.log("Deleted the file");
// });

//Delete a multiple file using fs (file system)

// fs.readdir("./sample", (err, files) => {
//     console.log(files);
//     files.forEach((fileName) =>
//       fs.unlink(`./sample/${fileName}`, (err) => {
//         console.log("Deleted file!!! ✨");
//       })
//     );
//   });
  
  




