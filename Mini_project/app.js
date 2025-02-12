import { cp } from "fs";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const todos = [];

const showmenu = () => {
  console.log("\n1. Add a Task: ");
  console.log("2. view tasks: ");
  console.log("3. Exit");
  rl.question("Enter your choice: ", (choice) => {
    if (choice === "1") {
      rl.question("Enter the task: ", (task) => {
        todos.push(task);
        console.log("Task added successfully: ", task);
        showmenu();
      });
    } else if (choice === "2") {
      console.log("\nYour tasks are: ");
      todos.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
      });
      showmenu();
    } else if (choice === "3") {
      console.log("Loved talking to YOU💖 bye!!");
      rl.close();
    } else {
      console.log("Invalid choice, please try again ");
      showmenu();
    }
  });
};

showmenu();
