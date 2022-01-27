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
        });
    });


    it("Test DELETE Request", () => {
        cy.request({
            method: 'DELETE',
            url: 'http://localhost:5000/api/posts/61f2bfa0371f608750498cf3'
        }).then((response) => {
            expect(response.body).to.contain("success");
        });
    });


    it("Test PATCH Request", () => {
        cy.request({
            method: 'PUT',
            url: 'http://localhost:5000/api/posts/61dee587498dfa7d91168b8e',
            body: {
                "body": "This is an update of post 3"
            }
        }).then((response) => {
            expect(response.body).has.property("body","This is an update of post 3");
        });
    });

});