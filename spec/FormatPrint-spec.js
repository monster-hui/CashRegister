describe('FormatPrint: ', function () {

    var prettyItems,  prettyInfo;

    beforeEach(function () {
        prettyItems = [
            {'item': new GoodsItem({"barcode":"ITEM000000","name" :"可口可乐350ml","unit":"瓶","price": 3.00}), 'amount': 20},
            {'item': new GoodsItem({"barcode":"ITEM000010","name" :"可口可乐550ml","unit": "瓶","price": 4.00}), 'amount': 20},
            {'item': new GoodsItem({"barcode":"ITEM000005","name" :"康师傅方便面","unit":"袋", "price":4.50}), 'amount': 30},
            {'item': new GoodsItem({"barcode":"ITEM000003","name" :"云山荔枝","unit":"斤","price":15.00}), 'amount': 12}
        ];

        prettyInfo = {
            "sum": 1234.56
        };

    });

    it('should be able to generate the correct item list.', function () {
        expect(FormatPrint.getItemList(prettyItems)).toEqual(
            '名称：可口可乐350ml，数量：20瓶，单价：3.00(元)，小计：60.00(元)\n' +
            '名称：可口可乐550ml，数量：20瓶，单价：4.00(元)，小计：80.00(元)\n' +
            '名称：康师傅方便面，数量：30袋，单价：4.50(元)，小计：135.00(元)\n' +
            '名称：云山荔枝，数量：12斤，单价：15.00(元)，小计：180.00(元)\n'
        );
    });
    it('should be able to generate the correct summary.', function () {
        expect(FormatPrint.getSummary(prettyInfo)).toEqual(
            '总计：1234.56(元)\n'
        );
    });
});
