describe('CaptchaFactory', function(){

    var captchaFactory;
    var firstOperandGenerator;

    beforeEach(function(){
        firstOperandGenerator = jasmine.createSpyObj('FirstOperandGenerator', ['generate']);
        captchaFactory = new CaptchaFactory(firstOperandGenerator);
    });

    it('should call generate first operand.', function(){
        captchaFactory.generate();

        expect(firstOperandGenerator.generate).toHaveBeenCalled();
    });

    it('first operand value should be value from firstOperandGenerator', function(){
        firstOperandGenerator.generate.and.returnValue('Two');

        var captcha = captchaFactory.generate();

        expect(captcha.getFirstOperand()).toEqual('Two');
    });

    
});
