const request = require('request');


const TOKEN = "private";


const options = {
    url : "https://api.integrator.io/v1/connections",
    headers : {
        Authorization: `Bearer ${TOKEN}`
    }

}

request.get(options, (err, res, body)=> {
    if(err){
        console.log(err);
        return;
    }

    console.log(body);
})