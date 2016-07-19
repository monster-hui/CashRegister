describe('benefit ', function () {
 var barcode
    beforeEach(function () {
        barcode="ITEM000000"
    });

    it('should be able to judge promotion type', function () {
        expect(benefit.promotionType(barcode)).toEqual("BUY_TWO_GET_ONE_FREE");
    });
    it('should be able to count buy-two-get-one', function () {
        expect(benefit.buySendStrategy(15,3)).toEqual({"add":30,"reduction":15,"freeNumber":1});

    });
    it('should be able to count 95%-off ', function () {
        expect(benefit.offStrategy(15,3)).toEqual({"add":42.75,"reduction":2.25});

    });
});