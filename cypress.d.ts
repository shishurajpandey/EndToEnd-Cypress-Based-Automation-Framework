/// <reference types="cypress" />

export { };

declare global {
    namespace Cypress {
        interface Chainable<Subject = any> {
            acceptCookieBanner(),
            openBlogPage(title: string),
            checkSalary(data: any),
            checkTheAvgSalary(amount: string),
            checkTheSalaryDifferences(),
            checkPositiveDifferenceOfState(),
            checkPositiveDifferenceOfExperience(),
            checkPositiveDifferenceOfWillingnessToTravel(),
            checkNegativeDifferenceOfState(),
            checkNegativeDifferenceOfExperience(),
            checkNegativeDifferenceOfWillingnessToTravel(),
        }
    }
}
