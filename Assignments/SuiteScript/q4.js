var contactRecord = nlapiCreateRecord('contact');
contactRecord.setFieldValue('firstname', 'Eren');
contactRecord.setFieldValue('lastname', 'Yea');
contactRecord.setFieldValue('email', 'erenyea@example.com');
contactRecord.setFieldValue('company',30648);
var contactID = nlapiSubmitRecord(contactRecord);