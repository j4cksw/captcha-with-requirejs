function Capcha(operandGenerater){
    'use strict';

    var operands = ["zero", "one", "two", "threee", "four", "five", "six", "seven", "eight", "nine"];

    this.get = function(){

        var generatedOperands = operandGenerater.generate();
        
        return {
            firstOperand: generatedOperands.firstOperand,
            secondOperand: operands[generatedOperands.secondOperand],
            answer: generatedOperands.getOperandsSummation()
        };
    };

}
