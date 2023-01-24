module.exports.Shorten = async function(url, title) {
    const KEY = 'ed9eb20f1cb82d490b4059062d2d2bd97c2c4'
    const axios = require("axios");
    const Verify = require('valid-url')
    var result;
    if (url) {
        if (Verify.isUri(url)) {
            if (title) {
                if (typeof title == 'string') {
                    await axios
                        .get('https://cutt.ly/api/api.php?key=ed9eb20f1cb82d490b4059062d2d2bd97c2c4&short=' + url + '&name=' + title)
                        .then((response) => {
                            result = response.data.url.shortLink
                        })
                        .catch((err) => {
                            return console.log(err)
                        })
                } else {
                    "ERROR: Parameter #2 of the .Shorten() function is not a valid String\n\nTO FIX: Enter a valid String in the first parameter of the .Shorten() function"
                }

            } else {
                await axios
                    .get('https://cutt.ly/api/api.php?key=ed9eb20f1cb82d490b4059062d2d2bd97c2c4&short=' + url)
                    .then((response) => {
                        result = response.data.url.shortLink
                    })
                    .catch((err) => {
                        return console.log(err)
                    })
            }

        } else {
            return console.log("ERROR: Parameter #1 of the .Shorten() function is not a valid URL\n\nTO FIX: Enter a valid URL in the first parameter of the .Shorten() function")
        }
    } else {
        return console.log("ERROR: Parameter #1 of the .Shorten() function\n\nTO FIX: Enter the URL that you want to shorten as the first parameter")
    }
    return result

}