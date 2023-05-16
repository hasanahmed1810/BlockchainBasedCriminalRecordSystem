/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("fyp e2e test", () => {
  it("fyp", () => {

    cy.visit(" http://localhost:3000/landingPage");

    cy.viewport(1366, 720);

    cy.get("h1").contains("Criminal Chain");

    cy.get("h5").contains("About Our Project")

    cy.get("h5").contains("Features and Workflow")

    cy.get("button").contains("Civilian Sign up").click()

    cy.get("h1").contains("Create civilian account")

    cy.get("button").contains("Sign up").click();

    cy.get("button").contains("Log in").click();

    cy.get("h1").contains("Sign in to your account")
    
    cy.get("#email").type("civilan@gmail.com");

    cy.get("#password").type("sektorsage12");

    cy.get("button").contains("Sign in").click();

    cy.get("button").contains("civilan@gmail.com");

    cy.get("button").contains("Submit FIR").click();

    cy.get("h1").contains("Submit an FIR")
    
    cy.get("button").contains("Submit Loss Report").click();

    cy.get("h1").contains("Submit a Loss Report")

    cy.get("button").contains("Submit Missing Person Report").click();

    cy.get("h1").contains("Report a Missing Person")

    cy.get("button").contains("Log out").click();

    cy.get("button").contains("Log in").click();

    cy.get("h1").contains("Sign in to your account")
    
    cy.get("#email").type("hasan.ahmed1810@gmail.com");

    cy.get("#password").type("sektorsage12");

    cy.get("button").contains("Sign in").click();

    cy.get("button").contains("hasan.ahmed1810@gmail.com")

    cy.get("caption").contains("List of Criminals")

    cy.get("th").contains("Name")

    cy.get("th").contains("Civilian ID")

    cy.get("th").contains("age")

    cy.get("th").contains("height (in cm)")

    cy.get("th").contains("date of birth")

    cy.get("th").contains("native language")

    cy.get("input").type("4230135784825")

    cy.get("td").contains("javed ahmed").click()

    cy.get("caption").contains("Criminal Details")

    cy.get("caption").contains("Criminal Records")

    cy.get("button").contains("Add Criminal Record").click()

    cy.get("h1").contains("Add Record")

    cy.get("button").contains("Analytics").click()

    cy.get("h1").contains("FIR's Being Investigated")

    cy.get("h1").contains("Investigations Completed")

    cy.get("h1").contains("Suspects Found Guilty")

    cy.get("h1").contains("Missing People Found")

    cy.get("h1").contains("Lost Property Found")

    cy.get("button").contains("Missing Persons").click()

    cy.get("caption").contains("List of Missing People")

    cy.get("td").contains("abdullah hasan").click()

    cy.get("caption").contains("Missing Person Information")

    cy.get("caption").contains("Investigator Information")

    cy.get("button").contains("Has Been Found")
    
    cy.get("button").contains("Loss Report").click()

    cy.get("caption").contains("List of Loss Reports")

    cy.get("th").contains("Property Type")

    cy.get("th").contains("Property Description")

    cy.get("th").contains("Date of Loss")

    cy.get("th").contains("Time of Loss")

    cy.get("th").contains("Where Property Was Lost")

    cy.get("th").contains("Found")

    cy.get("td").contains("f7").click()

    cy.get("caption").contains("Loss Information")

    cy.get("caption").contains("Complainant Information")

    cy.get("caption").contains("Investigator Information")

    cy.get("button").contains("Has Been Found")

    cy.get("button").contains("FIRs").click()

    cy.get("caption").contains("List of FIRs")

    cy.get("td").contains("Hasan Ahmed").click()

    cy.get("caption").contains("Complainant Information")

    cy.get("caption").contains("Incident Information")

    cy.get("button").contains("Investigation Started")

    cy.get("button").contains("Investigations").click()

    cy.get("caption").contains("List of Investigations")

    cy.get("tr").contains("Officer Name")

    cy.get("tr").contains("Officer ID")

    cy.get("tr").contains("Badge Number")

    cy.get("tr").contains("Officer Rank")

    cy.get("tr").contains("Incident")

    cy.get("tr").contains("Status")

    cy.get("td").contains("Charge Sheet Issued")

    cy.get("td").contains("ali").click()

    cy.get("caption").contains("Complainant Information")

    cy.get("caption").contains("Incident Information")

    cy.get("button").contains("Investigation Started")

    cy.get("button").contains("Charge Sheets").click()

    cy.get("caption").contains("List of Charge Sheets")

    cy.get("td").contains("hamza").click()

    cy.get("caption").contains("Details of the Accused")

    cy.get("caption").contains("Details of the Hearing")

    cy.get("th").contains("Charge")

    cy.get("th").contains("Under the Act")

    cy.get("th").contains("Under Section")

    cy.get("th").contains("Name of Court")

    cy.get("th").contains("Date of Hearing")

    cy.get("th").contains("Time of Hearing")

    cy.get("button").contains("Person Has Been Marked Guilty")

    cy.get("button").contains("Log out").click();
  });
});