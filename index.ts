#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.italic.greenBright("\n\t <<<===============Welcome To Riza Shakeel Adventure Game===============>>> \n\t"));

class Player {
    name: string;
    fuel: number = 1000;
    constructor(name: string) {
        this.name = name;
    }
    fueldecrease() {
        this.fuel -= 20;
    }
    fuelincrease() {
        this.fuel = 500;
    }
}

class Opponent {
    name: string;
    fuel: number = 100;
    constructor(name: string) {
        this.name = name;
    }
    fuelDecrease() {
        this.fuel -= 20;
    }
}

let player = await inquirer.prompt([
    {
        type: "input",
        name: "select",
        message: (chalk.bold.yellowBright("Please enter your name:"))
    }
]);

let opponent = await inquirer.prompt([
    {
        type: "list",
        name: "select",
        message: (chalk.bold.yellowBright("Select your Opponent:")), 
        choices: ["Skeleton", "Assassin", "Zombie"]
    }
]);

let P1 = new Player(player.select);
let O1 = new Opponent(opponent.select);

// Skeleton
if (opponent.select == "Skeleton") {
    let ask = await inquirer.prompt([
        {
            type: "list",
            name: "opt",
            message:(chalk.bold.yellowBright("Select Your Option:")),
            choices: ["Attack", "Drink Potion", "Run For Your Life..."]
        }
    ]);

    if (ask.opt == "Attack") {
        let num = Math.floor(Math.random() * 2);
        if (num > 0) {
            P1.fueldecrease();
            console.log(chalk.blueBright(`${P1.name} fuel is ${P1.fuel}`));
            console.log(chalk.blueBright(`${O1.name} fuel is ${O1.fuel}`));
        }
        if (P1.fuel <= 0) {
            console.log(chalk.redBright("You Lose Better Luck Next Time"));
            process.exit();
        }
        if (num <= 0) {
            O1.fuelDecrease();
            console.log(chalk.blueBright(`${P1.name} fuel is ${P1.fuel}`));
            console.log(chalk.blueBright(`${O1.name} fuel is ${O1.fuel}`));
        }
        if (O1.fuel <= 0) {
            console.log(chalk.magentaBright("YOU WIN"));
            process.exit();
        }
    }

    if (ask.opt == "Drink Potion") {
        P1.fuelincrease();
        console.log(chalk.magentaBright(`\nYou Drink Health Potion. Fuel is ${P1.fuel}`));
    }

    if (ask.opt == "Run For Your Life...") {
        console.log(chalk.redBright("\nYou Lose Better Luck Next Time"));
        process.exit();
    }
}

// Assassin
if (opponent.select == "Assassin") {
    let ask = await inquirer.prompt([
        {
            type: "list",
            name: "opt",
            message: (chalk.bold.yellowBright("Select Your Option:")),
            choices: ["Attack", "Drink Potion", "Run For Your Life..."]
        }
    ]);

    if (ask.opt == "Attack") {
        let num = Math.floor(Math.random() * 2);
        if (num > 0) {
            P1.fueldecrease();
            console.log(chalk.blueBright(`${P1.name} fuel is ${P1.fuel}`));
            console.log(chalk.blueBright(`${O1.name} fuel is ${O1.fuel}`));
            if (P1.fuel <= 0) {
                console.log(chalk.redBright("\nYou Lose Better Luck Next Time"));
                process.exit();
            }
        }

        if (num <= 0) {
            O1.fuelDecrease();
            console.log(chalk.blueBright(`${P1.name} fuel is ${P1.fuel}`));
            console.log(chalk.blueBright(`${O1.name} fuel is ${O1.fuel}`));
        }
        if (O1.fuel <= 0) {
            console.log(chalk.magentaBright("YOU WIN"));
            process.exit();
        }
    }

    if (ask.opt == "Drink Potion") {
        P1.fuelincrease();
        console.log(chalk.magentaBright(`\nYou Drink Health Potion. Fuel is ${P1.fuel}`));
    }

    if (ask.opt == "Run For Your Life...") {
        console.log(chalk.redBright("\nYou Lose Better Luck Next Time"));
        process.exit();
    }
}

// Zombie
if (opponent.select == "Zombie") {
    let ask = await inquirer.prompt([
        {
            type: "list",
            name: "opt",
            message: (chalk.bold.yellowBright("Select Your Option:")),
            choices: ["Attack", "Drink Potion", "Run For Your Life..."]
        }
    ]);

    if (ask.opt == "Attack") {
        let num = Math.floor(Math.random() * 2);
        if (num > 0) {
            P1.fueldecrease();
            console.log(chalk.blueBright(`${P1.name} fuel is ${P1.fuel}`));
            console.log(chalk.blueBright(`${O1.name} fuel is ${O1.fuel}`));
            if (P1.fuel <= 0) {
                console.log(chalk.redBright("\nYou Lose Better Luck Next Time"));
                process.exit();
            }
        }

        if (num <= 0) {
            O1.fuelDecrease();
            console.log(chalk.blueBright(`${P1.name} fuel is ${P1.fuel}`));
            console.log(chalk.blueBright(`${O1.name} fuel is ${O1.fuel}`));
        }
        if (O1.fuel <= 0) {
            console.log(chalk.magentaBright("\nYOU WIN"));
            process.exit();
        }
    }

    if (ask.opt == "Drink Potion") {
        P1.fuelincrease();
        console.log(chalk.magentaBright(`\nYou Drink Health Potion. Fuel is ${P1.fuel}`));
    }

    if (ask.opt == "Run For Your Life...") {
        console.log(chalk.redBright("\nYou Lose Better Luck Next Time"));
        process.exit();
    }
};

console.log(chalk.magentaBright.bold.italic("\n\t Exiting..... \n\t"));
