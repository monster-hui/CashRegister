describe('  GoodsItem ', function () {
    
    it('should be able to constructed correctly', function () {

        var item = new GoodsItem({"barcode": "ITEM000000","name": "可口可乐350ml","unit": "瓶","category": "食品","subCategory": "碳酸饮料","price": "3.00"});

        expect(item.barcode).toEqual('ITEM000000');
        expect(item.category).toEqual('食品');
        expect(item.subCategory).toEqual('碳酸饮料');
        expect(item.name).toEqual('可口可乐350ml');
        expect(item.unit).toEqual('瓶');
        expect(item.price).toEqual("3.00");

    });
});
