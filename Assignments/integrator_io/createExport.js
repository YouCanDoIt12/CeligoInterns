const request = require('request');


const TOKEN = "private";
const options = {
    url : "https://api.integrator.io/v1/exports",
    headers : {
        'Content-Type' : "application/json",
        Authorization : `Bearer ${TOKEN}`
    },
    body : JSON.stringify({
        "name": "REST Export nodejs",
        "_connectionId": "63df8dc42a6da13b6ad3a822",
        "_sourceId": "63c672a65fdd020f501945ff",
        "apiIdentifier": "e8c47b3f4a",
        "asynchronous": true,
        "oneToMany": false,
        "http": {
            "relativeURI": "/demo",
            "method": "GET",
            "formType": "http"
        },
        "adaptorType": "HTTPExport"
    })

}

request.post(options, (err, res, body)=> {
    if(err){
        console.log(err);
        return;
    }

    console.log(body);
})