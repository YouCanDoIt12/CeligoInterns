var salesOrder = nlapiLoadRecord('salesorder', 122967);
var lineItem = salesOrder.getLineItemValue('item', 'quantity', 2);
salesOrder.setLineItemValue('item', 'quantity', 2, 5);
salesOrder.setLineItemValue('item', 'amount', 2,10);
nlapiSubmitRecord(salesOrder);
