#! /usr/bin/env node
import chalk from "chalk";

function MultiplicationTable(num: number, length: number): void {
    console.log(chalk.greenBright.bold`Multiplication Table of ${num}:`);
    
    for (let i = 1; i <= length; i++) {
        const result = num * i;
        console.log(chalk.blueBright.blue`${num} * ${i} = ${result}`);}}

// Print the multiplication table with a length of 10
// table print karna:
MultiplicationTable(5, 10);
