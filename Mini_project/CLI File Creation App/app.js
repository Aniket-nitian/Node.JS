import readline from "readline";
import fs from "fs";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const showMenu = () => {
  rl.question("What's your file name, Enter it: ", (filename) => {
    rl.question("What's your file content, Enter it: ", (content) => {
      fs.writeFile(`${filename}.txt`, content, (err) => {
        if (err) {
          console.log(`Error writing the file: ${err.message}`);
        } else {
          console.log(`File "${filename}.txt" created successfully!!`);
        }
        rl.close();
      });
    });
  });
};

showMenu();
