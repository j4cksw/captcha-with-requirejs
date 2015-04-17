describe("Capcha", function(){
    var capcha;
    var operandsGenerater;

    beforeEach(function(){
        operandsGenerater = jasmine.createSpyObj('OperandsGenerater', ['generate']);
        operandsGenerater.generate.and.returnValue(new Operands({
            firstOperand: 1,
            secondOperand:1
        }));

        capcha = new Capcha(operandsGenerater);
    });

    it("should call OperandsGenerater", function(){
        capcha.get();

        expect(operandsGenerater.generate).toHaveBeenCalled();
    })

    it("Second operand should be value in operand list", function(){
        var operands = ["one", "two", "threee", "four", "five", "six", "seven", "eight", "nine"];
        expect(operands.indexOf(capcha.get().secondOperand)).not.toEqual(-1);
    });

    it("Answer should be summation of first and second operands", function(){
        operandsGenerater.generate.and.returnValue(new Operands({
            firstOperand: 1,
            secondOperand:1
        }));

        expect(capcha.get().answer).toEqual(2);
    });

    it("Answer should be summation of first and second operands", function(){
        operandsGenerater.generate.and.returnValue(new Operands({
            firstOperand: 2,
            secondOperand:2
        }));

        expect(capcha.get().answer).toEqual(4);
    });

});
