const request = require('request');
const async = require('async');
const fs = require('fs');
const archiver=require('archiver');
const images = [`https://www.justcolor.net/wp-content/uploads/sites/1/nggallery/doodle-art-doodling/coloring-page-adults-doodle-art-rachel.jpg`,
`https://i.pinimg.com/originals/e5/55/a3/e555a39ca5457a079a9bcce59f61f8d5.jpg`,
`https://i.pinimg.com/originals/ef/4c/91/ef4c91fb73e61e19211a0589187ccaa6.jpg`,
`https://static.vecteezy.com/system/resources/previews/000/107/464/non_2x/huge-doodle-vector-pack.jpg`,
`https://i.ytimg.com/vi/O5u1apUkYV0/maxresdefault.jpg`,
`https://media.glassdoor.com/l/e9/c1/7a/84/independence-day-celebration.jpg`
];

let folderName = 'folder1';
let count = 0;
async.each(images, (image, callback) => {
    if (count >= 5) {
        folderName = `folder${folderName.slice(-1) + 1}`;
        count = 0;
    }
    if (!fs.existsSync(`${folderName}`)) {
        fs.mkdirSync(`${folderName}`);
      }
    request(image).pipe(fs.createWriteStream(`./${folderName}/${count}.jpg`));
    const output = fs.createWriteStream(`${folderName}/images.zip`);
    const archive = archiver('zip', {
      zlib: { level: 9 }
    });
    archive.pipe(output);
    archive.directory(`${folderName}`, false);
    archive.finalize();
    count++;
    callback();
},(err)=>{
    if(err){
        console.log("ERROR");
    }

    
});