export class BlogPage {

    checkSalary({ highestEducation = 'In Ausbildung', experience = '2-5 Jahre', willingnessToTravel = 'Ein paar Tage im Monat', state = 'Berlin' }) {

        cy.get('a[routerlink="gehaltscheck-machen"]').first().click();

        cy.get('app-dropdown[name="highestEducation"]').click();
        cy.get('span').contains(highestEducation).click();

        cy.get('app-dropdown[name="experience"]').click();
        cy.get('span').contains(experience).click();

        cy.get('app-dropdown[name="willingnessToTravel"]').click();
        cy.get('span').contains(willingnessToTravel).click();

        cy.get('app-dropdown[name="state"]').click();
        cy.get('span').contains(state).click();

        cy.get('button[class*="gtm-salary-checker-results"]').click();

    }
}