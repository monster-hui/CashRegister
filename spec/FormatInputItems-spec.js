describe('printing',function(){
 var Print;
 beforeEach(function(){
  Print = require('../src/printing.js');
 });
 it('get items and counts from input data',function(){
  var data= ['ITEM000001','ITEM000001','ITEM000001','ITEM000001','ITEM000001','ITEM000003','ITEM000003-2','ITEM000005','ITEM000005','ITEM000005'];
   var output = Print(data);
   var expectedOutput = [
    {"ITEM000001":5},
    {'ITEM000003':3},
    {'ITEM000005':3}
   ];
   expect(output).toEqual({expectedOutput});
 });
});
