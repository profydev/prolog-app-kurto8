import mockProjects from "../fixtures/projects.json";

describe("Project List", () => {
  beforeEach(() => {
    // open projects page
    cy.visit("http://localhost:3000/dashboard");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("renders a loading spinner while fetching data", () => {
      cy.get('[data-cy="projects-loading-spinner"]').should("exist");
    });

    describe("unsuccesful fetching of data", () => {
      it("renders a error message if data is not fetched succesfully", () => {
        // setup failed request stub
        cy.intercept("GET", "https://prolog-api.profy.dev/project", {
          statusCode: 500,
        })
          .as("getProjectsFailure")
          .wait(4000);
        cy.wait("@getProjectsFailure").then((xhr) => {
          expect(xhr.response?.statusCode).to.equal(500);
        });
        cy.get('[data-cy="error-fetching-projects"]').should("exist");
      });
    });

    describe("succesful fetching of data", () => {
      it("renders the projects", () => {
        // setup succesful request stub
        cy.intercept("GET", "https://prolog-api.profy.dev/project", {
          fixture: "projects.json",
        }).as("getProjects");
        cy.wait("@getProjects");
        cy.wait(500);

        const languageNames = ["React", "Node.js", "Python"];
        const errorDisplayValue = ["Critical", "Warning", "Stable"];

        // get all project cards
        cy.get("main")
          .find("li")
          .each(($el, index) => {
            // check that project data is rendered
            cy.wrap($el).contains(mockProjects[index].name);
            cy.wrap($el).contains(languageNames[index]);
            cy.wrap($el).contains(mockProjects[index].numIssues);
            cy.wrap($el).contains(mockProjects[index].numEvents24h);
            cy.wrap($el).contains(errorDisplayValue[index]);
            cy.wrap($el)
              .find("a")
              .should("have.attr", "href", "/dashboard/issues");
          });
      });
    });
  });
});
