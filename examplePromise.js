// Now i am practicing Promise Using Inquirer to get input and check status of Promise
// I am writing a program of Ordering Shirt Online also incorpoated Async Function as using await and use of Promise
import inquirer from "inquirer";
import chalk from "chalk";
// import chalkAnimation from 'chalk-animation';
console.log(chalk.bold.bgBlue("\n***Well Come to Shirt Online Store***"));
const ans = await inquirer.prompt([
    {
        name: "shirt",
        type: "list",
        message: "Which Brand of Shirts you want to buy",
        choices: ["Polo Republica", "Burburry", "Zara Men", "Dinners", "UniWorth"]
    }
]);
const sizeDescp = await inquirer.prompt([
    {
        name: "size",
        type: "checkbox",
        message: "Choose Size of Your Shirt",
        choices: ["Extra Large", "Large", "Medium", "Small"]
    }
]);
const color = await inquirer.prompt([
    {
        name: "Color",
        type: "checkbox",
        message: "Choose Color of Your Shirt",
        choices: [chalk.blue("Blue"), chalk.black("Black"), chalk.gray("Gray"), chalk.white("White")]
    }
]);
let confirmOrder = await inquirer.prompt([{
        name: "validate",
        message: "Are you confirm your order",
        type: "confirm",
    }]);
function shirtOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (confirmOrder.validate == true) {
                resolve(chalk.bold("Thank You Your Order is Confirmed and Soon it recieved to you."));
            }
            else {
                reject(chalk.bold("You declined your order"));
            }
        }, 2000);
    });
}
shirtOrder().then((res) => {
    console.log(res);
}).catch((res) => {
    console.log(res);
});
