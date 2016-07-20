function formatInputItems(items) {
 var delimiter = '-', itemDetails, itemBarcode, itemCount, final = [];
 var results = _.map(items.sort(), function (item) {
itemDetails =item.split( delimiter);
  itemBarcode = itemDetails[0];
  itemCount = typeof itemDetails[1] == 'undefined' ? 1 : itemDetails[1];
  return _.times(parseInt(itemCount), _.constant(itemBarcode))
 });
 return _.map(_.countBy(_.flatten(results), _.identity), function (value, key) {
  return {[key]: value};
 });
}