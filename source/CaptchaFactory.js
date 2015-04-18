function CaptchaFactory(firstOperandGenerator){
    this.generate = function(){

        return new Captcha(firstOperandGenerator.generate());
    }
}
