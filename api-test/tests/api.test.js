const request = require('supertest');
const expect = require('chai').expect;
const Methods = require('../helpers/getMethod');
const userData = require('../test-data/userData.json');
describe('API Automation using SuperTest', () => {
  const URI = 'https://reqres.in';

  it('should successfully get User ID and Name', () => {
		request(URI)
			.get('/api/users/2')
			.end(function (err, res) {
				expect(res.statusCode).to.be.equal(200);
				expect(res.body.data.id).to.be.equal(2);
				expect(res.body.data.first_name).to.be.equal('Janet');
        console.log(res.body.data.id);
		//console.log(res.headers);
        console.log(res.body.data.first_name);
			});

	const result = Methods.getRequest(URI,'/api/users/2');
	//console.log(result);
	});

	it('should successfully post user data and populate ID', (done) => {
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
				done();
			});
	});

});