const request = require('request');

const TOKEN = "private";
const options = {
    url : "https://api.integrator.io/v1/connections",
    headers : {
        'Content-Type' : "application/json",
        Authorization : `Bearer ${TOKEN}`
    },
    body : JSON.stringify({
        "type": "netsuite",
        "name": "NetSuite nodejs",
        "offline": false,
        "_sourceId": "63c8e6b48cf6535a1e7a7787",
        "netsuite": {
            "account": "TSTDRV1288246",
            "roleId": "3",
            "requestLevelCredentials": true,
            "dataCenterURLs": {
                "restDomain": "https://tstdrv1288246.restlets.api.netsuite.com",
                "webservicesDomain": "https://tstdrv1288246.suitetalk.api.netsuite.com",
                "systemDomain": "https://tstdrv1288246.app.netsuite.com"
            },
            "tokenId": "******",
            "tokenSecret": "******",
            "entityId": "30639",
            "wsdlVersion": "2020.2",
            "concurrencyLevel": 1,
            "suiteAppInstalled": false,
            "authType": "token-auto"
        },
        "microServices": {
            "disableNetSuiteWebServices": false
        }
    })

}

request.post(options, (err, res, body)=> {
    if(err){
        console.log(err);
        return;
    }

    console.log(body);
})