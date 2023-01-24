const shortener = require('link-shortener');
const fs = require('fs');

class UrlShortener {
    constructor(){}

    async shortenUrls(urls) {
        const shortenedUrls = await Promise.all(urls.map(async (url) => {
            const shortenedUrl = await shortener.Shorten(url);
            return {
                original: url,
                shortened: shortenedUrl
            }
        }));
        return shortenedUrls;
    }

    async saveToCsv(shortenedUrls) {
        let csv = 'original,shortened\n';
        shortenedUrls.forEach((url) => {
            csv += `${url.original},${url.shortened}\n`;
        });

        fs.writeFileSync('shortenedUrls.csv', csv);
        console.log('CSV of shortened URLs saved');
    }
}

const urls = [
    'https://google.com',
    'https://facebook.com',
    'https://twitter.com'
];

const shortenerr = new UrlShortener();
shortenerr.shortenUrls(urls)
    .then((shortenedUrls) => shortenerr.saveToCsv(shortenedUrls))
    .catch((err) => console.log(err));
