#!/usr/bin/env node
'use strict';
const meow = require('meow');
const chalk = require('chalk');
const ci = require('./cis.js')

const cli = meow(`
	Usage
	  $ ci-success <option|flag>

	Options
		travis        show travis ci logo
		app-veyor     show app veyor ci logo
		circle-ci     show circle ci logo
		jenkins       show jenkins ci logo
		gitlab        show gitlab ci logo

	Flags
		--help        show this message and close
		--success     add success to any continuous integration

	Example
		$ ci-success travis --success
` + ci.travis + ci.success);

const defaultMessage = () => {
	console.log(ci.success);
};

if(cli.input[0] == 'travis') {
	console.log(ci.travis);
}

if(cli.input[0] == 'circle-ci') {
	console.log(ci.circleCI);
}

if(cli.input[0] == 'jenkins') {
	console.log(ci.jenkins);
}

if(cli.input[0] == 'gitlab') {
	console.log(ci.gitlab);
}

if(cli.input[0] == 'app-veyor') {
	console.log(ci.appVeyor);
}

if(cli.input.length != 1) {
	defaultMessage();
}

if(cli.flags.success) {
	defaultMessage();
}
