describe('  formatInputItems',function(){
 it('get items and counts from input data just have item,no "-"',function(){
  var data= ['ITEM000001','ITEM000001','ITEM000001','ITEM000001','ITEM000001','ITEM000003','ITEM000005','ITEM000005','ITEM000005'];
   var output = formatInputItems(data);
   var expectedOutput = [
		{"ITEM000001":5},
		{'ITEM000003':1},
		{'ITEM000005':3}
   ];
   expect(output).toEqual(expectedOutput);
 });
 it('get items and counts from input data when have "-";eg:"ITEM000003-2"', function(){
	var data = ['ITEM000001','ITEM000001','ITEM000003-2','ITEM000005'];
	var output = formatInputItems(data);
	var expectedOutput = [
		{"ITEM000001":2},
		{'ITEM000003':2},
		{'ITEM000005':1}
	];
	expect(output).toEqual(expectedOutput);
 });
  it('get items and counts from input data when have -;eg:"ITEM000003-2,ITEM000003 "', function(){
	var data = ['ITEM000001','ITEM000001','ITEM000003-2','ITEM000003','ITEM000005'];
	var output = formatInputItems(data);
	var expectedOutput = [
		{"ITEM000001":2},
		{'ITEM000003':3},
		{'ITEM000005':1}
	];
	expect(output).toEqual(expectedOutput);
 });
   it('get items and counts from input data when data is empty', function(){
	var data = [];
	var output = formatInputItems(data);
	var expectedOutput = [];
	expect(output).toEqual(expectedOutput);
 });
});
