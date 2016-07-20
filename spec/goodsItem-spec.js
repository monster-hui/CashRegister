describe('  goodsItem ', function () {

    it('should be able to constructed a goods object', function () {

        var item = new GoodsItem({"barcode": "ITEM000000","name": "可口可乐350ml",
            "unit": "瓶","category":"食品","subCategory":"碳酸饮料","price":3.00});

        expect(item.barcode).toEqual('ITEM000000');
        expect(item.category).toEqual('食品');
        expect(item.subCategory).toEqual('碳酸饮料');
        expect(item.name).toEqual('可口可乐350ml');
        expect(item.unit).toEqual('瓶');
        expect(item.price).toEqual(3.00);
    });
    it('should be able to constructed a goods object ,when input just have json.barcode;', function () {

        var item = new GoodsItem({"barcode": "ITEM000000"});

        expect(item.barcode).toEqual('ITEM000000');
        expect(item.category).toEqual('');
        expect(item.subCategory).toEqual('');
        expect(item.name).toEqual('');
        expect(item.unit).toEqual('');
        expect(item.price).toEqual(0.00);
    });
    it('should be able to return  null ,when input is not a object with json.barcode', function () {

        var item = new GoodsItem({});
        expect(item).toBeDefined();
    });
});
