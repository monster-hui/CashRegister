
function printInventory(inputs) {
    var inputItems=[];
    var prettyInfo={"sum":0};
    _.forEach(inputs, function (input) {
        inputItems.push({'item': new GoodsItem({
            barcode:input.barcode,
            name: input.name,
            unit: input.unit,
            price: input.price}), 'amount': input.count});
        prettyInfo.sum += input.price * input.count;
  })
    console.log(FormatPrint.format(inputItems,prettyInfo));

