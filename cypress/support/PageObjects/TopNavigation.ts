export class TopNavigation {
    openMenuOption() {
        return cy.get('[aria-label="Menü öffnen"]').click();
    }

    openBlogPage(text: string) {
        this.openMenuOption();
        cy.get('[class="dropdown-button"]').click();
        cy.get(`span`).contains(text).click()
    }
}