const request = require('supertest');
const expect = require('chai').expect;
const Methods = require('../helpers/getMethod');
const userData = require('../test-data/userData.json');
describe('API Automation using SuperTest', () => {
  const URI = 'https://reqres.in';

  var first_name;
  var respBody;
  it('should successfully get User ID and Name', (done) => {
		request(URI)
			.get('/api/users/2')
			.end(function (err, res) {
				expect(res.statusCode).to.be.equal(200);
				expect(res.body.data.id).to.be.equal(2);
				expect(res.body.data.first_name).to.be.equal('Janet');
				first_name= res.body.data.first_name;
				respBody=res.body;
        		console.log(res.body.data.id);
				if(err){
					throw err;
				}
				done();
			});
	});
	
	it('should successfully print  Name', () => {
		console.log(first_name);
		console.log(respBody);
	});

	it('should successfully post user data and populate ID', () => {
		request(URI)
			.post('/api/users')
			.send(userData)
			.set('Accept', 'application/json')
			.set('Content-Type', 'application/json')
			.end(function(err, res) {
				expect(res.statusCode).to.be.equal(201);
				expect(res.body.name).to.be.equal('SuperTest');
				expect(res.body.job).to.be.equal('API Automation');
				expect(res.body.id).not.to.be.null;
				console.log(res.body.id);
				expect(res.body.createdAt).not.to.be.null;
			});
	});

});