class Operator {
    constructor(name, callable) {
        this.name = name;
        this.callable = callable;
    }

    execute(operand1, operand2) {
        this.callable(operand1, operand2);
    }
}
