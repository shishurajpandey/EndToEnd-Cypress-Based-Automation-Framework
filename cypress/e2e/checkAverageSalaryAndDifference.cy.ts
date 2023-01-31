import { data } from "../fixtures/data";

describe('Check average salary and difference', () => {

  beforeEach(() => {
    cy.viewport('iphone-8');
    cy.visit(Cypress.env('url'));
    cy.acceptCookieBanner();
    cy.openBlogPage(data.blogTitle.electricianSalaryOverview)
  })

  it('Check the average gross income and choices that affects the salary for State - Berlin', () => {
    cy.checkSalary({ state: 'Berlin' });
    cy.checkTheAvgSalary(data.avgSalary.berlin);
    cy.checkNegativeDifferenceOfState();
    cy.checkNegativeDifferenceOfExperience();
    cy.checkNegativeDifferenceOfWillingnessToTravel();
  });

  it('Check the average gross income and choices that affects the salary for State- Bremen', () => {
    cy.checkSalary({ state: 'Bremen' });
    cy.checkTheAvgSalary(data.avgSalary.bremen);
    cy.checkNegativeDifferenceOfState();
    cy.checkNegativeDifferenceOfExperience();
    cy.checkNegativeDifferenceOfWillingnessToTravel();
  });

  it('Check the average gross income and choices that affects the salary for State - Bayern', () => {
    cy.checkSalary({ state: 'Bayern' });
    cy.checkTheAvgSalary(data.avgSalary.bayern);
    cy.checkPositiveDifferenceOfState();
    cy.checkNegativeDifferenceOfExperience();
    cy.checkNegativeDifferenceOfWillingnessToTravel();
  });

})
