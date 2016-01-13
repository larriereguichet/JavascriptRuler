class Lexer {
    constructor() {
        this.operators = new Map();
        this.operators.set('and', function (a, b) {
            return a + b;
        });
        // defines terminal symbols
        this.terminals = new Map();
        // operators
        this.terminals.set('and', /(\+)/);
        this.terminals.set('superior', /(>)/);
        // variables
        this.terminals.set('identifier', /^([A-Za-z])/);
        // constant integers
        this.terminals.set('integer', /^\d+$/);
    }

    lex(source) {
        var characters = '';
        var tokens = [];
        source = source.replace(/ /g, '');
        //console.log('source', source);

        for (var i = 0; i < source.length; i++) {
            characters += source[i];
            var match = this.match(characters);

            if (match) {
                tokens.push(match);
                characters = '';
            }
        }
        console.log(tokens);
    }

    match(source) {
        var match = false;

        this.terminals.forEach(function (terminal, name) {
            console.log('trace', terminal, source, terminal.test(source));

            if (terminal.test(source)) {
                match = new Token(name, source);
            }
        });
        return match;
    }
}
