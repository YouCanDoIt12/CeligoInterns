const request = require('request');


const TOKEN = "private";
const options = {
    url : "https://api.integrator.io/v1/imports",
    headers : {
        'Content-Type' : "application/json",
        Authorization : `Bearer ${TOKEN}`
    },
    body : JSON.stringify({
        "name": "Slack Import nodejs",
        "_connectionId": "63db572909a0e15e2b52c8bf",
        "_sourceId": "63c67360cba7f262cb2d2874",
        "apiIdentifier": "i8f4f1dacf",
        "ignoreExisting": false,
        "ignoreMissing": false,
        "oneToMany": false,
        "assistant": "slack",
        "assistantMetadata": {
            "resource": "chat",
            "version": "latest",
            "operation": "chat_postmessage"
        },
        "mapping": {
            "fields": [
                {
                    "generate": "channel",
                    "hardCodedValue": "iotraining"
                },
                {
                    "extract": "customername",
                    "generate": "text"
                },
                {
                    "generate": "as_user",
                    "hardCodedValue": "Diwakar Verma"
                }
            ]
        },
        "http": {
            "relativeURI": [
                "chat.postMessage"
            ],
            "method": [
                "POST"
            ],
            "body": [
                null
            ],
            "batchSize": 1,
            "requestMediaType": "json",
            "successMediaType": "json",
            "errorMediaType": "json",
            "strictHandlebarEvaluation": true,
            "sendPostMappedData": true,
            "formType": "assistant",
            "response": {
                "resourceIdPath": [
                    null
                ],
                "successPath": [
                    "ok"
                ],
                "successValues": [
                    [
                        "true"
                    ]
                ]
            }
        },
        "rest": {
            "relativeURI": [
                "chat.postMessage"
            ],
            "method": [
                "POST"
            ],
            "body": [
                null
            ],
            "responseIdPath": [
                null
            ],
            "successPath": [
                "ok"
            ],
            "successValues": [
                "true"
            ]
        },
        "adaptorType": "RESTImport"
    }
       )

}

request.post(options, (err, res, body)=> {
    if(err){
        console.log(err);
        return;
    }

    console.log(body);
})