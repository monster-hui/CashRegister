describe('pos', function () {
    var inputs;

    beforeEach(function () {
        inputs = [
            'ITEM000000',
            'ITEM000000',
            'ITEM000000',
            'ITEM000000',
            'ITEM000000',
            'ITEM000001',
            'ITEM000001',
            'ITEM000004'
        ];
    });

    it('should print correct text', function () {

        spyOn(console, 'log');

        printInventory(inputs);

        var expectText =
            '***<没钱赚商店>购物清单***\n' +
            '名称：可口可乐，数量：5瓶，单价：3.00(元)，小计：15.00(元)\n'+
        '名称：百事可乐，数量：2瓶，单价：3.00(元)，小计：6.00(元)\n'+
        '名称：萨姆奶茶，数量：1瓶，单价：4.00(元)，小计：4.00(元)\n' +
            '----------------------\n' +
            '总计：25.00(元)\n' +
            '**********************';

        expect(console.log).toHaveBeenCalledWith(expectText);
    });
});