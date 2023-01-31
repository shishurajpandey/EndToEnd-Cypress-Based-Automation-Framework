import { PopupPage } from "./PageObjects/PopupPage";
import { TopNavigation } from "./PageObjects/TopNavigation";
import { BlogPage } from "./PageObjects/BlogPage";
import { ResultPage } from "./PageObjects/ResultPage";

const popup = new PopupPage();
const topNav = new TopNavigation();
const blog = new BlogPage();
const result = new ResultPage();

Cypress.Commands.add('acceptCookieBanner', () => {
    popup.acceptCookieBannerPopup();
});

Cypress.Commands.add('openBlogPage', (title) => {
    topNav.openBlogPage(title);
});

Cypress.Commands.add('checkSalary', (data) => {
    blog.checkSalary(data);
});

Cypress.Commands.add('checkTheAvgSalary', (amount) => {
    result.checkTheAvgSalary(amount);
});


Cypress.Commands.add('checkTheSalaryDifferences', () => {
    result.checkTheSalaryDifferences();
})

Cypress.Commands.add('checkPositiveDifferenceOfState', () => {
    result.checkPositiveDifferenceOfState();
})

Cypress.Commands.add('checkPositiveDifferenceOfExperience', () => {
    result.checkPositiveDifferenceOfExperience();
})

Cypress.Commands.add('checkPositiveDifferenceOfWillingnessToTravel', () => {
    result.checkPositiveDifferenceOfWillingnessToTravel();
})

Cypress.Commands.add('checkNegativeDifferenceOfState', () => {
    result.checkNegativeDifferenceOfState();
})

Cypress.Commands.add('checkNegativeDifferenceOfExperience', () => {
    result.checkNegativeDifferenceOfExperience();
})

Cypress.Commands.add('checkNegativeDifferenceOfWillingnessToTravel', () => {
    result.checkNegativeDifferenceOfWillingnessToTravel();
})



