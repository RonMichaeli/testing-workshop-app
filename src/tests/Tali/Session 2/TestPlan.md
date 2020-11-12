## My Test Plan
## Test 1
### Preparation
* Requirement: 21.ii
* Requirement type: UX
* Client: Product
* Test level: Unit/Integration

### Test Structure  
* Setup
    1. Mock service that gets the conversion rate (to return error)
* Steps
    1. Render the main component
* Assertions
    1. Error message should be displayed as an alert
    2. Calculator should not be displayed

## Test 2
### Preparation
* Requirement: 6.c  
* Requirement type: Functional 
* Client: Product
* Test level: System

### Test Structure  
* Setup
    1. Clear the calculator
* Steps
    1. Type a valid expression  
    2. Click '='
* Assertions
    1. Assert a correct result
    2. The result is visible to the user. 
    

* Setup
    1. Clear the calculator
* Steps
    1. Type an invalid expression  
    2. Click '='
* Assertions
    1. The expression is still displayed to the user
    

* Setup
    1. Clear the calculator
* Steps
    1. Type 2/0  
    2. Click '='
* Assertions
    1. 2/0 is still displayed to the user

## Test 3
   ### Preparation
   * Requirement: Check that the external service for getting conversion rate is secure 
   * Requirement type: Security
   * Client: R&d? IT & Security?
   * Test level: ?
   
   ### Test Structure  
   * Setup
       1. Setup designated machine?
       2. import / use http client for making requests
   * Steps
       1. Try to fetch "https://api.exchangeratesapi.io/latest"
   * Assertions
       1. Run result against a threat test    