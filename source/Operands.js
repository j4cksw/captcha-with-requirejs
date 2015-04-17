function Operands(generatedOperands){
    this.firstOperand = generatedOperands.firstOperand;
    this.secondOperand = generatedOperands.secondOperand;

    this.getOperandsSummation = function(){
        return this.firstOperand + this.secondOperand;
    };
}
