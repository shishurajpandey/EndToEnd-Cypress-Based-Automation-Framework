# Introduction

This demo project is created to run PowerUs E2E tests using Cypress. The project has following feature integrated in it-
- TypeScript supported
- Data driven tests
- Page Object Models (POM) design pattern is used
- Custom Cypress Commands has been created which can be reused everywhere to avoid the code repeats
- ESLint integrated
- Clean code, easy to read
- Scalability- Easy to Scale
- Simplicity- Simple Design

### Tech

This test uses a number of open source projects to work properly:

* [https://cypress.io/](https://cypress.io/) - Cypress
* [https://nodejs.org/en/](https://nodejs.org/en/) - evented I/O for the backend

### Installation

This requires [Node.js](https://nodejs.org/) v12+ to run.

Install the dependencies and devDependencies.

```sh
cd Demo_PowerUs_Cypress
npm i
```

### How to trigger E2E tests

To run all tests just simply type

```sh
npm run e2e
```

Example output

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:        11.2.0                                                                         │
  │ Browser:        Electron 106 (headless)                                                        │
  │ Node Version:   v18.13.0 (/usr/local/bin/node)                                                 │
  │ Specs:          1 found (checkAverageSalaryAndDifference.cy.ts)                                │
  │ Searched:       cypress/e2e/**                                                                 │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  checkAverageSalaryAndDifference.cy.ts                                           (1 of 1)


  Check average salary and difference
    ✓ Check the average gross income and choices that affects the salary for State - Berlin (9792ms)
    ✓ Check the average gross income and choices that affects the salary for State- Bremen (8859ms)
    ✓ Check the average gross income and choices that affects the salary for State - Bayern (8177ms)


  3 passing (29s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        3                                                                                │
  │ Passing:      3                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     28 seconds                                                                       │
  │ Spec Ran:     checkAverageSalaryAndDifference.cy.ts                                            │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: /Users/shishurajpandey/Projects/Demo_PowerUs_Cypress/cypres    (6 seconds)
                          s/videos/checkAverageSalaryAndDifference.cy.ts.mp4                        


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  checkAverageSalaryAndDifference.cy.      00:28        3        3        -        -        - │
  │    ts                                                                                          │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        00:28        3        3        -        -        -  
