import 'cypress-if'

export class PopupPage {
    acceptCookieBannerPopup() {
        return cy.get('#onetrust-accept-btn-handler').if('visible').click();
    }
}
