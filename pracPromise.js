// How to Use Promise (Yesterday Class)
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        name: "marks",
        type: "input",
        message: "Please Enter Marks:"
    }
]);
function checkMarks() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (answer.marks >= 90) {
                resolve("Hurrayy!!! Party Time");
            }
            else {
                reject("No Party....Try again");
            }
        }, 2000);
    });
}
checkMarks().then((res) => {
    console.log(res);
}).catch((res) => {
    console.log(res);
});
