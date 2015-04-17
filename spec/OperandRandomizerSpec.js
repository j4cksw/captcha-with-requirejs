describe("OperandsGenerater", function(){
    'use strict';

    it("First operand should have value between 0 to 9", function(){
        var generater = new OperandsGenerater();

        var availableOperands = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        expect(availableOperands.indexOf(generater.generate().firstOperand)).toBeGreaterThan(-1);
    });

    it("Second operand should have value between 0 to 9", function(){
        var generater = new OperandsGenerater();

        var availableOperands = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        expect(availableOperands.indexOf(generater.generate().secondOperand)).toBeGreaterThan(-1);
    });
});
