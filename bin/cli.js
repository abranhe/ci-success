#!/usr/bin/env node
'use strict';
const path = require('path');
const meow = require('meow');
const termImg = require('term-img');
const terminalImage = require('terminal-image');
const chalk = require('chalk');

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

		$$$$$$\\
 	$$  __$$\\
 	$$ /  \\__|$$\\   $$\\  $$$$$$$\\  $$$$$$$\\  $$$$$$\\   $$$$$$$\\  $$$$$$$\\
 	\\$$$$$$\\  $$ |  $$ |$$  _____|$$  _____|$$  __$$\\ $$  _____|$$  _____|
 	 \\____$$\\ $$ |  $$ |$$ /      $$ /      $$$$$$$$ |\\$$$$$$\\  \\$$$$$$\\
 	$$\\   $$ |$$ |  $$ |$$ |      $$ |      $$   ____| \\____$$\\  \\____$$\\
 	\\$$$$$$  |\\$$$$$$  |\\$$$$$$$\\ \\$$$$$$$\\ \\$$$$$$$\\ $$$$$$$  |$$$$$$$  |
 	 \\______/  \\______/  \\_______| \\_______| \\_______|\\_______/ \\_______/

		...

`);

let ciName;
let success = chalk.green(`

	 $$$$$$\\
	$$  __$$\\
	$$ /  \\__|$$\\   $$\\  $$$$$$$\\  $$$$$$$\\  $$$$$$\\   $$$$$$$\\  $$$$$$$\\
	\\$$$$$$\\  $$ |  $$ |$$  _____|$$  _____|$$  __$$\\ $$  _____|$$  _____|
	 \\____$$\\ $$ |  $$ |$$ /      $$ /      $$$$$$$$ |\\$$$$$$\\  \\$$$$$$\\
	$$\\   $$ |$$ |  $$ |$$ |      $$ |      $$   ____| \\____$$\\  \\____$$\\
	\\$$$$$$  |\\$$$$$$  |\\$$$$$$$\\ \\$$$$$$$\\ \\$$$$$$$\\ $$$$$$$  |$$$$$$$  |
	 \\______/  \\______/  \\_______| \\_______| \\_______|\\_______/ \\_______/

`);

const defaultMessage = () => {
	console.log(success);
};

const fallback = async () => {
	const image = await terminalImage.file(path.join(__dirname, ciName + '.png'));
	console.log(image);
};

const showImg = (ci) => {
	ciName = ci;
	termImg(path.join(__dirname, ci + '.png'), {fallback});
};

if(cli.flags.success) {
	defaultMessage();
}

if(cli.input[0] == 'travis') {
	showImg('travis');
}

if(cli.input[0] == 'circle-ci') {
	showImg('circle-ci');
}

if(cli.input[0] == 'jenkins') {
	showImg('jenkins');
}

if(cli.input[0] == 'gitlab') {
	showImg('gitlab');
}

if(cli.input[0] == 'app-veyor') {
	showImg('app-veyor');
}

if(cli.input.length != 1) {
	defaultMessage();
}
