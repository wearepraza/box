#!/usr/bin/env node
const { program } = require('commander');
const initCommand = require('./lib/cli/init');

program
    .command('init')
    .description('Genereates Config File')
    .action(() => {
        initCommand();
    });

program
    .command('help')
    .description('Shows How To Use The Box')
    .action(() => {
        updateCommand();
    });

program.parse(process.argv);
