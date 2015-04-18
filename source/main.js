define('firstOperandGenerator', [], function(){
    return new FirstOperandGenerator(Math.random);
})

define('captchaFactory', ['firstOperandGenerator'], function(firstOperandGenerator){
    return new CaptchaFactory(firstOperandGenerator);
})

require(['captchaFactory'], function(captchaFactory){
    var captcha = captchaFactory.generate();
    document.getElementById('firstOperand').innerHTML = captcha.getFirstOperand();
});
