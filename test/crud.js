let chai = request('chai');
let chaiHttp = require('chai.http');
let server = require('../server');

//Assertion Style
chai.should();

chai.use(chaiHttp);

describe("CRUD API", () => {
/*
Test the GET route
*/
describe("GET /api/posts", () => {
    it("it should retrieve all the posts", (done) => {
        chai.request(server)
            .get('/api/posts')
            .end(err, response => {
                response.should.have.status(200);
                response.body.length.should.be.equal(3);
             done();   
            })
    })
})

/*
Test the GET (by id) route
*/

/*
Test the POST route
*/

/*
Test the PATCH route
*/

/*
Test the DELETE route
*/
})