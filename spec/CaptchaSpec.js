describe('Captcha', function(){
    it('first operand should be One', function(){
        var captcha = new Captcha();

        expect(captcha.getFirstOperand()).toBe('One');
    });
});
