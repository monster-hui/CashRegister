/**
 * Created by Administrator on 2016/7/18.
 */
function FormatPrint() {

}
FormatPrint.getItemList = function (prettyItems) {
    var itemString = '';
    _.forEach(prettyItems, function (prettyItem) {
        itemString +=
            '名称：' + prettyItem.item.name +
            '，数量：' + prettyItem.amount + prettyItem.item.unit +
            '，单价：' + prettyItem.item.price.toFixed(2) + '(元)' +
            '，小计：' + (prettyItem.item.price * prettyItem.amount).toFixed(2) + '(元)' +
            '\n';
    });
    return itemString;
};
FormatPrint.getSplitter = function () {
    return '----------------------\n';
};
FormatPrint.getSummary = function (prettyInfo) {
    return '总计：' + prettyInfo.sum.toFixed(2) + "(元)\n" ;
};
//prettyItems = [
// {'item': new GoodsItem({"barcode":"ITEM000000","name" :"可口可乐350ml","unit":"瓶","price": 3.00}), 'amount': 20},
// {'item': new GoodsItem({"barcode":"ITEM000010","name" :"可口可乐550ml","unit": "瓶","price": 4.00}), 'amount': 20},
// ]
//   prettyInfo = {'sum': 1234.56,'reduction': 123.45}
FormatPrint.format = function (prettyItems, prettyInfo) {
    var res = '';
    res += '***<没钱赚商店>购物清单***\n';
    res += this.getItemList(prettyItems);
    res += this.getSplitter();
    res += this.getSummary(prettyInfo);
    res += '**********************';
    return res;
};