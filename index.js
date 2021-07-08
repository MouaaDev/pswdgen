#!/usr/bin/env node
import { Command } from "commander";
import chalk from "chalk";
import clipboardy from "clipboardy";
import createPassword from "./utils/createPassword.js";
import savePassword from "./utils/savePassword.js";

const program = new Command();
program.version("1.0.0").description("Simple Password Generator");

program
  .option("--length <number>", "length of password", "8")
  .option("-s, --save", "save password to password.txt")
  .option("-nn, --no-numbers", "remove numbers")
  .option("-ns, --no-symbols", "remove symbols")
  .parse();

const { length, save, numbers, symbols } = program.opts();

// Get generated password
const generatedPassword = createPassword(length, numbers, symbols);

//Save to file
if (save) {
  savePassword(generatedPassword);
}

// Copy to clipboard
clipboardy.writeSync(generatedPassword);

// Output generated password
console.log(chalk.blueBright("Generated Password: ") + generatedPassword);
console.log(chalk.yellow("Password copied to clipboard"));
