var salesOrderId = 122967;
var cashSaleRecord = nlapiTransformRecord('salesorder', 122967, 'invoice');
for (var i = cashSaleRecord.getLineItemCount('item'); i > 1; i--) {
   cashSaleRecord.removeLineItem('item', i);
}
var cashSaleId = nlapiSubmitRecord(cashSaleRecord);

  