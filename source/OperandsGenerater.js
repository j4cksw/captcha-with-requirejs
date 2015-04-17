function OperandsGenerater(){
    this.generate = function(){
        return new Operands({
            firstOperand: randomNumber(),
            secondOperand: randomNumber()
        });
    };

    function randomNumber(){
        return Math.floor((Math.random() * 10) + 1);
    }
}
