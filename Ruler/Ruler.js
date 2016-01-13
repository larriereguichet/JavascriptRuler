class Ruler {
    constructor() {
        this.lexer = new Lexer();
    }

    assert(rule) {
        this.lexer.lex(rule);
    }
}
