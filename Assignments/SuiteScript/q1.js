var customerRecord = nlapiCreateRecord('customer');
customerRecord.setFieldValue('companyname', 'Dummy Company');
customerRecord.setFieldValue('email', 'dummycompany@example.com');
customerRecord.setFieldValue('billaddress', '123 Main St');
customerRecord.setFieldValue('subsidiary', 2);

var customerId = nlapiSubmitRecord(customerRecord);
