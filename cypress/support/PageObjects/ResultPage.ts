export class ResultPage {
    p = {
        differences: {
            salaryDiff: 'div[class="differences"] app-salary-difference-box p'
        }
    }

    checkTheAvgSalary(amount: string) {
        cy.get('p[class="avg-salary"]').should('be.visible');
        cy.contains(amount);
    }

    checkTheSalaryDifferences() {
        cy.get('app-salary-differences').should('be.visible');
    }

    checkPositiveDifferenceOfState() {
        cy.get(this.p.differences.salaryDiff).eq(1).invoke('attr', 'class').should('eq', 'difference positive');
    }

    checkPositiveDifferenceOfExperience() {
        cy.get(this.p.differences.salaryDiff).eq(3).invoke('attr', 'class').should('eq', 'difference positive');
    }

    checkPositiveDifferenceOfWillingnessToTravel() {
        cy.get(this.p.differences.salaryDiff).eq(3).invoke('attr', 'class').should('eq', 'difference positive');
    }

    checkNegativeDifferenceOfState() {
        cy.get(this.p.differences.salaryDiff).eq(1).invoke('attr', 'class').should('eq', 'difference negative');
    }

    checkNegativeDifferenceOfExperience() {
        cy.get(this.p.differences.salaryDiff).eq(3).invoke('attr', 'class').should('eq', 'difference negative');
    }

    checkNegativeDifferenceOfWillingnessToTravel() {
        cy.get(this.p.differences.salaryDiff).eq(3).invoke('attr', 'class').should('eq', 'difference negative');
    }
}