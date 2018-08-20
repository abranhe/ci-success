# [<p align="center"> CI-SUCCESS</p>](https://www.npmjs.com/package/ci-success)

<blockquote align="center"> Tired of getting errors in ci? ci-success is here </blockquote>

<p align="center">
<a href="https://www.npmjs.com/package/ci-success"><img src="https://cdn.abraham.gq/projects/ci-success/shot.png" align="center"></a>
</p>

<p align="center">
	<!-- LICENSE -->
	<a href="https://github.com/abranhe/ci-success/blob/master/LICENSE"><img src="https://img.shields.io/github/license/abranhe/ci-success.svg" /></a>
	<!-- NPM Version -->
	<a href="https://www.npmjs.com/package/ci-success"><img src="https://img.shields.io/npm/v/ci-success.svg" /></a>
	<!-- @abranhe -->
	<a href="https://github.com/abranhe"><img src="https://abranhe.com/badge.svg"></a>
	<!-- Cash me -->
	<a href="https://cash.me/$abranhe"><img src="https://cdn.abraham.gq/badges/cash-me.svg"></a>
	<!-- Patreon -->
	<a href="https://www.patreon.com/abranhe"><img src="https://cdn.abraham.gq/badges/patreon.svg" /></a>
</p>

| CI | Build|
| -   |  -  |
| App Veyor|[![Build status](https://ci.appveyor.com/api/projects/status/8pn3j4l89ygnoge5?svg=true)](https://ci.appveyor.com/project/abranhe/ci-success) |
| Travis |[![img](https://img.shields.io/travis/abranhe/ci-success.svg?logo=travis)](https://travis-ci.org/abranhe/ci-success)|
|Circle**ci**|[![CircleCI](https://circleci.com/gh/abranhe/ci-success/tree/master.svg?style=svg&circle-token=d86574f2af9f565e003d5d2bf0b7891f7ed44f62)](https://circleci.com/gh/abranhe/ci-success/tree/master)|
| Codeship|[ ![Codeship Status for abranhe/ci-success](https://app.codeship.com/projects/c4b98950-865f-0136-56e6-0298f1e5ac4e/status?branch=master)](https://app.codeship.com/projects/302460)|
| Gitlab | [![pipeline status](https://gitlab.com/abranhe/ci-success/badges/master/pipeline.svg)](https://gitlab.com/abranhe/ci-success/commits/master)|

# Description

**CI-SUCCESS** was created with the objective of cheat on [Travis CI](https://travis-ci.org) when testing Node.js modules. **CI-SUCCESS** is completely useless and *anti-testing* at all. It won't check or test anything and will always return `0` (at least I hope so 😬 ), and if you are a programmer, developer or something like that: you will know what `0` means.

Sometimes I don't want to create tests for my projects, and get travis running ok, I was exhausted to use `echo PASSING` so I created it.

> ⚠️ NOTE: I don't use it a lot, and I recommend to you not to use it. CREATE YOUR TESTS ☝🏻

# Supported  CIs

- Travis
- Circle CI
- Jenkins
- App Veyor
- Gitlab

# Install

```
npm install --save ci-success
```

# Config `package.json`

```json
"scripts": {
	"test": "ci-success"
}
```

# CLI

```console
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


	                          Ndhso+//////+oshdN
	                      Nho/------------------/ohN
	                    h+--------------------------+h
	                  y:---------::::::::::::---------:y
	                h:-----------syyyyyyyyyys-----------:h
	               o-------------syy/oyyo/yys-------------o
	             N+----:::-----------+yy+-----------::::---+
	             o////////-----------+yy+-----------////////o
	            h///:::///-----------+yy+-----------///:::///h
	        Nhs+:------///----------syyyys----------///------:+shN
	       s-----------///::::::::::oooooo::::::::::///-----------s
	       +-----------////////////////////////////////-----------+
	       o-----------:::::----------------------:::::-----------s
	       y------------::///+++ooooooooooo++++++///::------------h
	       N-----:/+oosyyyyyyyyysssssoooosyyyyyyyyyyyysso+//:-----N
	        +-/osyyyysso+osso+//:::::::/oyyyyysso+//++oosssssso:-+
	        Nsyyyys+/::/+///sys/::://osssoo+//::oyy+::::://osso:yN
	       Nhyysyso::::::::yd:hs::+ssssssss+:::/d+od/::::::oss:--m
	      Nyy+--oss/::::::/ddddy:+sso::::oss+::/dddds/::::/sso---d
	     NydN---/sso::::::+++//:+sso......oss+:://////::::oss/---N
	    NdN  s---ssso+/:://++oossso........osssoo++//::/+osss---s
	    N     o---/osssssssssso+/:..........:/+osssssssssso/---o
	           Ndy:../oo+/:-....:+s:......:s+:....-:/+oo/..:ydN
	            dhh-........./oyyyyys+//+syyyyyo:.........-hhd
	             myyyoooooosyyyyyyyyyyyyyyyyyyyyyysooooooyyym
	              NyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyN
	               NhyyyyyyyyyyyyyyyysoosyyyyyyyyyyyyyyyyhN
	                  Nmysyyyyyyyso+::::::+osyyyyyyysymN
	                     d+:/++/-....----....-/++/:+d
	                       Nh+-................-+hN
	                           Nhso/::::::/oshN




 $$$$$$\
$$  __$$\
$$ /  \__|$$\   $$\  $$$$$$$\  $$$$$$$\  $$$$$$\   $$$$$$$\  $$$$$$$\
\$$$$$$\  $$ |  $$ |$$  _____|$$  _____|$$  __$$\ $$  _____|$$  _____|
 \____$$\ $$ |  $$ |$$ /      $$ /      $$$$$$$$ |\$$$$$$\  \$$$$$$\
$$\   $$ |$$ |  $$ |$$ |      $$ |      $$   ____| \____$$\  \____$$\
\$$$$$$  |\$$$$$$  |\$$$$$$$\ \$$$$$$$\ \$$$$$$$\ $$$$$$$  |$$$$$$$  |
 \______/  \______/  \_______| \_______| \_______|\_______/ \_______/

```
# Team

|[![Carlos Abraham Logo](https://avatars3.githubusercontent.com/u/21347264?s=50&v=4)](https://19cah.com)|
| :-: |
| [Carlos Abraham](https://github.com/abranhe) |

# License

[MIT](https://github.com/abranhe/ci-success/blob/master/LICENSE) License © [Carlos Abraham](https://github.com/abranhe/)
