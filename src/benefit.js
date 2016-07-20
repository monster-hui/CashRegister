function benefit() {

}
//判断商品是否有相应优惠
benefit.promotionType=function(barcode){
    var output=false;
    _.forEach(promotion,function(it){
        _.forEach(it.barcodes,function (bar) {
            if(bar==barcode) {
                 output=it.type;
                return;
            }
        })
        if(output=="BUY_TWO_GET_ONE_FREE")
            return;
    });
    return output;
}

benefit.buySendStrategy=function(price,number){
    var output={};
    output.freeNumber=Math.floor(number/3);
    output.add=parseFloat((number-output.freeNumber)*price);
    output.reduction=output.freeNumber*price;
    return output;
}

benefit.offStrategy=function(price,number){
    var output={};
    output.add=parseFloat((price * number * 0.95).toFixed(3));
    output.reduction=parseFloat((price*number-output.add).toFixed(3));
    return output;
}