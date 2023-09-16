#!/usr/bin/env node
const { program } = require('commander');
const initCommand = require('./lib/cli/init');
const createCommand = require('./lib/cli/create');

program
    .command('init')
    .description('Genereates Config File')
    .action(() => {
        initCommand();
    });

program
    .command('create')
    .description('Generates CSS File Based On Configs')
    .action(() => {
        createCommand();
    });

program
    .command('update')
    .description('Updates CSS Files Based On Changes On Config File')
    .action(() => {
        updateCommand();
    });

program.parse(process.argv);
