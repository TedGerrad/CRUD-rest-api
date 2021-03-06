const { expect } = require("chai");

describe("Testing API Endpoints with Cypress", () => {

    it("Test GET Request", () => {
        cy.request("http://localhost:5000/api/posts")
        .then((response) => {
            expect(response.body).to.have.property('code', 200);
            
        });
    });

    it("Test POST Request", () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:5000/api/posts',
            body: {
                "title" : "This is post n",
                "body" : "This is a new post"
            }
        }).then((response) => {
            expect(response.body).has.property("body","This is a new post");
        })
    })

});