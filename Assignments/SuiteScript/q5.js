var salesOrder = nlapiCreateRecord('salesorder');
salesOrder.setFieldValue('entity', 30648);
salesOrder.selectNewLineItem('item');
salesOrder.setCurrentLineItemValue('item', 'item', 9091);
salesOrder.setCurrentLineItemValue('item', 'quantity', 2);
salesOrder.setCurrentLineItemValue('item', 'amount', 10);
salesOrder.commitLineItem('item');

salesOrder.selectNewLineItem('item');
salesOrder.setCurrentLineItemValue('item', 'item', 9088);
salesOrder.setCurrentLineItemValue('item', 'quantity', 3);
salesOrder.setCurrentLineItemValue('item', 'amount', 10);
salesOrder.commitLineItem('item');

nlapiSubmitRecord(salesOrder);
