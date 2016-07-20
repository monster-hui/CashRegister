describe('  formatPrint: ', function () {

    var prettyItems,  prettyInfo,prettyBenefits;

    beforeEach(function () {
        prettyItems = [
            {'item': new GoodsItem({"barcode":"ITEM000000","name" :"可口可乐350ml","unit":"瓶","price": 3.00}),"add":60,"reduction":36.00,'amount': 20},
            {'item': new GoodsItem({"barcode":"ITEM000010","name" :"可口可乐550ml","unit": "瓶","price": 4.00}),"add":80, 'amount': 20},
            {'item': new GoodsItem({"barcode":"ITEM000005","name" :"康师傅方便面","unit":"袋", "price":4.50}), "add":135,'amount': 30},
            {'item': new GoodsItem({"barcode":"ITEM000003","name" :"云山荔枝","unit":"斤","price":15.00}), "add":180,'amount': 12}
        ];
        prettyBenefits=[{
            "name" :"可口可乐350ml","amount":10,"unit":"瓶"},{
            "name" :"康师傅方便面","amount":5,"unit":"袋"}
        ]
        prettyInfo={
            "sum": 1234.56,
            "reduction":123.45};
    });

    it('should be able to generate the correct item list.', function () {
        expect(FormatPrint.getItemList(prettyItems)).toEqual(
            '名称：可口可乐350ml，数量：20瓶，单价：3.00(元)，小计：60.00(元)，节省：36.00(元)\n' +
            '名称：可口可乐550ml，数量：20瓶，单价：4.00(元)，小计：80.00(元)\n' +
            '名称：康师傅方便面，数量：30袋，单价：4.50(元)，小计：135.00(元)\n' +
            '名称：云山荔枝，数量：12斤，单价：15.00(元)，小计：180.00(元)\n'
        );
    });
    it('should be able to generate the correct benefit list.', function () {
        expect(FormatPrint.getBenefitList(prettyBenefits,"买二送一")).toEqual(
            "买二送一商品：\n"+
            '名称：可口可乐350ml，数量：10瓶\n' +
        '名称：康师傅方便面，数量：5袋\n'
        );
    });
    it('should be able to generate the correct summary.', function () {
        expect(FormatPrint.getSummary(prettyInfo)).toEqual(
            '总计：1234.56(元)\n'+
            "节省：123.45(元)\n"
        );
    });

    it('should be able to generate the correct all massage.', function () {
        expect(FormatPrint.format(prettyItems,prettyBenefits,"买二送一",prettyInfo)).toEqual(
            "***<没钱赚商店>购物清单***\n"+
        "名称：可口可乐350ml，数量：20瓶，单价：3.00(元)，小计：60.00(元)，节省：36.00(元)\n"+
        "名称：可口可乐550ml，数量：20瓶，单价：4.00(元)，小计：80.00(元)\n"+
        "名称：康师傅方便面，数量：30袋，单价：4.50(元)，小计：135.00(元)\n"+
        "名称：云山荔枝，数量：12斤，单价：15.00(元)，小计：180.00(元)\n"+
        "----------------------\n"+
            "买二送一商品：\n"+
"名称：可口可乐350ml，数量：10瓶\n"+
        "名称：康师傅方便面，数量：5袋\n"+
       "----------------------\n"+
            "总计：1234.56(元)\n"+
        "节省：123.45(元)\n"+
        "**********************"
        );
        expect(FormatPrint.format(prettyItems,null,"买二送一",prettyInfo)).toEqual(
            "***<没钱赚商店>购物清单***\n"+
            "名称：可口可乐350ml，数量：20瓶，单价：3.00(元)，小计：60.00(元)，节省：36.00(元)\n"+
            "名称：可口可乐550ml，数量：20瓶，单价：4.00(元)，小计：80.00(元)\n"+
            "名称：康师傅方便面，数量：30袋，单价：4.50(元)，小计：135.00(元)\n"+
            "名称：云山荔枝，数量：12斤，单价：15.00(元)，小计：180.00(元)\n"+
            "----------------------\n"+
            "总计：1234.56(元)\n"+
            "节省：123.45(元)\n"+
            "**********************"
        );
    });

});
