describe('FirstOperandGenerator', function(){
    it("should return value from One to Nine", function(){
        var firstOperandGenerator = new FirstOperandGenerator(Math.random);

        var possibles = {
            'Zero': true,
            'One': true,
            'Two': true,
            'Three': true,
            'Four': true,
            'Five': true,
            'Six': true,
            'Seven': true,
            'Eight': true,
            'Nine': true,
        }

        expect(possibles[firstOperandGenerator.generate()]).toBeTruthy();
    });

    it('should random generate value for first operand', function(){
        random = jasmine.createSpy('random');
        var firstOperandGenerator = new FirstOperandGenerator(random);

        firstOperandGenerator.generate();

        expect(random).toHaveBeenCalled();
    });
})
