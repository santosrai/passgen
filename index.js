#!/usr/bin/env node
const chalk = require('chalk')
const createPassword = require('./utils/createPassword')
// get comander
const program = require('commander')

// get version
program.version('1.0.0').description('simple password generator')

program
    .option('-l, --length <number>', 'length of password', '8')
    .option('-s, --save', 'save password to passwords.txt')
    .option('-nn, --no-numbers', 'remove numbers')
    .option('-ns, --no-symbols', 'remove symbols')
    .parse()

const {length, save, numbers, symbols} = program.opts();

//generate password
const generatePassword = createPassword(length, numbers,symbols);

// Output generated password
console.log(chalk.blue('Generated Password: ') + chalk.bold(generatePassword))

