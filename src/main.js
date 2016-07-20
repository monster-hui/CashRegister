function printInventory(inputs) {
    // var formatInputItems=formatInputItems(inputs);
    var inputItems=[];
    var prettyInfo={"sum":0.00 ,"reduction":0};
    var benefitItems=[];
    var benefitType;
    _.forEach(formatInputItems(inputs),function (formatInputItem) {
        _.forEach(goods,function (it) {
            if(formatInputItem.hasOwnProperty(it.barcode)){
                var goodsItem = new GoodsItem(it);
                var  amount=formatInputItem[it.barcode];
                switch (benefit.promotionType(it.barcode)){
                    case "BUY_TWO_GET_ONE_FREE":
                       var benef=benefit.buySendStrategy(goodsItem.price,amount);
                        inputItems.push({"item": goodsItem, "amount": amount,"add":benef.add});
                        prettyInfo.sum+=benef.add;
                        prettyInfo.reduction+=benef.reduction;
                        if(!!benef.freeNumber) {
                            benefitItems.push({
                                "name": goodsItem.name,
                                "amount": benef.freeNumber,
                                "unit": goodsItem.unit
                            });
                            benefitType = "买二送一";
                        }
                        break;
                    case "95%_0FF":
                        var benef=benefit.offStrategy(goodsItem.price,amount);
                        inputItems.push({"item": goodsItem, "amount": amount,
                            "add":benef.add,"reduction":benef.reduction});
                        prettyInfo.sum+=benef.add;
                        prettyInfo.reduction+=benef.reduction;
                        break;
                    case false:
                        var add=goodsItem.price*amount;
                        inputItems.push({"item": goodsItem, "amount": amount,"add":add});
                        prettyInfo.sum+=add;
                        break;
                    default:
                        break
                }
            }
        });
    });

   console.log(FormatPrint.format(inputItems,benefitItems,benefitType,prettyInfo));
}