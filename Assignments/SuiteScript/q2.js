var customerRecord = nlapiLoadRecord('customer', 30648);
customerRecord.setFieldValue('companyname', 'Test DV');
nlapiSubmitRecord(customerRecord);
