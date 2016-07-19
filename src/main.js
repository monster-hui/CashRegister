function printInventory(inputs) {
    // var formatInputItems=formatInputItems(inputs);
    var inputItems=[];
    var prettyInfo={"sum":0};
    _.forEach(formatInputItems(inputs),function (formatInputItem) {
        _.forEach(goods,function (it) {
            if(formatInputItem.hasOwnProperty(it.barcode)){
                inputItems.push({"item": new GoodsItem(it),
                    "amount": formatInputItem[it.barcode]});
                prettyInfo.sum += it.price * formatInputItem[it.barcode];
            }
        });
    });

    console.log(FormatPrint.format(inputItems,prettyInfo));
}