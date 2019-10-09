'use strict';
const axios = require('axios');

module.exports.hello = async event => {

   const data = await axios.get('https://reddit.com/r/CatGifs/random.json')

    const gifUrl = data.data[0].data.children[0].data.preview.images[0].variants.gif.source.url;

    

    const options = {
      method: 'POST',
      headers: {'content-type': 'application/json' },
      data: {text:gifUrl},
      url:'https://hooks.slack.com/services/dfghdfghdfgh/dfghdfgh/fghdfghdfghdfghdfgh',
    };
    axios(options);
  
    return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        gifUrl:gifUrl,
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
