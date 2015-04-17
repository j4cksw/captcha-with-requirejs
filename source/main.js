define('Captcha', [], function(){
    return Captcha;
});

require(['Captcha'], function(Captcha){
    var captcha = new Captcha();
    document.getElementById('firstOperand').innerHTML = captcha.getFirstOperand();
});
