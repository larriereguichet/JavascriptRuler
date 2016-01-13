all: install

install:
	cp node_modules/traceur/bin/traceur.js web/traceur.js
	cp node_modules/traceur/bin/traceur-runtime.js web/traceur-runtime.js
	make build

build:
	node_modules/.bin/traceur --out web/rulerz.js \
		--script Parser/Parser.js \
		--script Ruler/Ruler.js \
		--script Lexer/Lexer.js \
		--script Lexer/Token.js \


watch:
	@while [ "true" ] ; do \
		make build; \
		sleep 2; \
	done;
