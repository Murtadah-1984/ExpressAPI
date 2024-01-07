const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Assuming your app.js file is one level above the test directory.

chai.use(chaiHttp);
const expect = chai.expect;

describe('API Tests', () => {
    it('should return a list of products', (done) => {
        chai.request(app)
            .get('/api/products')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
                done();
            });
    });

    it('should create a new product', (done) => {
        const newProduct = {
            name: 'Test Product',
            description: 'This is a test product',
            price: 19.99
        };

        chai.request(app)
            .post('/api/products')
            .send(newProduct)
            .end((err, res) => {
                expect(res).to.have.status(201);
                expect(res.body).to.be.an('object');
                expect(res.body.name).to.equal(newProduct.name);
                expect(res.body.description).to.equal(newProduct.description);
                expect(res.body.price).to.equal(newProduct.price);
                done();
            });
    });

    // Add more test cases as needed for your API endpoints.
});
