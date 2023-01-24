function MetadataParser(version, channel, keyField) {
    this._version = version;
    this._channel = channel;
    this._keyField = keyField;
  }
  
  MetadataParser.prototype.setVersion = function(version) {
    this._version = version;
  };
  
  MetadataParser.prototype.getVersion = function() {
    return this._version;
  };
  
  MetadataParser.prototype.setChannel = function(channel) {
    this._channel = channel;
  };
  
  MetadataParser.prototype.getChannel = function() {
    return this._channel;
  };
  
  MetadataParser.prototype.setKeyField = function(keyField) {
    this._keyField = keyField;
  };
  
  MetadataParser.prototype.getKeyField = function() {
    return this._keyField;
  };
  
  MetadataParser.prototype.getKeyFields = function(jsonArray) {
    return jsonArray.map(json => json[this._keyField]);
  }
  const myData = new MetadataParser(1.0, 'channel', 'field');

  console.log(myData.getKeyFields([{field: 'A'}, {field: 'B'}, {field: 'C'}]));


  function groupObjectsBy(arr, key) {
    const groupedObject = arr.reduce((acc, curr) => {
      const keyValue = curr[key];
      if (!acc[keyValue]) {
        acc[keyValue] = [];
      }
      acc[keyValue].push(curr);
      return acc;
    }, {});
  
    return groupedObject;
  }
  
  const inputArray = [
    {
      "channel": "A",
      "name": "shoe"
    },
    {
      "channel": "A",
      "name": "electronics"
    },
    {
      "channel": "B",
      "name": "apparel"
    },
    {
      "channel": "C",
      "name": "electronics"
    }
  ];
  console.log(groupObjectsBy(inputArray, 'channel'));