import mockProjects from "../fixtures/projects.json";

describe("Project List", () => {
  beforeEach(() => {
    // open projects page
    cy.visit("http://localhost:3000/dashboard");
  });

  describe("succesful fetching of data", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("renders a loading spinner while fetching data", () => {
      cy.get('[data-cy="projects-loading-spinner"]').should("exist");
    });

    describe("unsuccesful fetching of data", () => {
      beforeEach(() => {
        // setup request mocks
        cy.intercept("GET", "https://prolog-api.profy.dev/project", {
          forceNetworkError: true,
        })
          .as("getProjectsFailure")
          .wait(4000);
      });

      it("renders a error message if data is not fetched succesfully", () => {
        cy.wait("@getProjectsFailure");
        cy.get('[data-cy="error-fetching-projects"]').should("exist");
      });
    });

    describe("succesful fetching of data", () => {
      beforeEach(() => {
        // setup request mocks
        cy.intercept("GET", "https://prolog-api.profy.dev/project", {
          fixture: "projects.json",
        }).as("getProjects");
      });

      it("renders the projects", () => {
        cy.wait("@getProjects");

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
