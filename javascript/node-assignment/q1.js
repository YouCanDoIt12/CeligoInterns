var parseString = require('xml2js').parseString;
const xml=`<root>
    <person id='1'>
    <name>Alan</name>
    <url>http://www.google.com</url>
    </person>
    <person id='2'>
    <name>Louis</name>
    <url>http://www.yahoo.com</url>
    </person>
  </root> `;

  class XmlParser {
    constructor(options, xml) {
      this.xml = xml;
      this.options = options;
    }
    parse() {
      return parseString(xml, options,function (err, result) {
        console.log((result));
    });
    }
  }
  function nameToUpperCase(name){
    return name.toUpperCase();
  }
  const options = {
    tagNameProcessors: [nameToUpperCase]
  };
  
  const parser = new XmlParser(options, xml);
    parser.parse();

  /* part b*/
  const fs=require('fs');
  
  XmlParser.prototype.parseFile=function(path){


    fs.readFile(path,'utf8',function(err,data){
      const xml2=data;

      return parseString(xml, options,function (err, result) {
        console.log(JSON.stringify(result));
    });

    });

    

  }
  const parser2 = new XmlParser(options, xml);
    parser2.parseFile('demo.xml');