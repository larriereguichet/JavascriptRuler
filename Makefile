all: install

install:
	node_modules/.bin/traceur --out web/rulerz.js --script Parser/Parser.js
