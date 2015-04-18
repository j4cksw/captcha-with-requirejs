function FirstOperandGenerator(random){

    var operands = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']

    this.generate = function(){
        return operands[Math.floor((random() * 9) + 1)];
    };
}
