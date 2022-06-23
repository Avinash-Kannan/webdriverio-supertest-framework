const request = require('supertest');

class Methods {

 getRequest = async (URI,query) => {
    return await request(URI).get(query).body;
  };

}
module.exports = new Methods();