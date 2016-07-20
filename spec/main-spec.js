describe('pos', function () {
    it('should print detailed list of goods without benefit  ', function () {
         spyOn(console, 'log');
        printInventory(inputs[0]);
        expect(console.log).toHaveBeenCalledWith(outputdata[0]);
    });
    it('should print detailed list of goods with buy-two-get-one', function () {
         spyOn(console, 'log');
        printInventory(inputs[1]);
        expect(console.log).toHaveBeenCalledWith(outputdata[1]);
    });

    it('should print detailed list of goods with 95%-off', function () {
         spyOn(console, 'log');
        printInventory(inputs[2]);
        expect(console.log).toHaveBeenCalledWith(outputdata[2]);
    });

    it('should print detailed list of goods with buy-two-get-one  and 95%-off ', function () {
     spyOn(console, 'log');
        printInventory(inputs[3]);
        expect(console.log).toHaveBeenCalledWith(outputdata[3]);
    });
});