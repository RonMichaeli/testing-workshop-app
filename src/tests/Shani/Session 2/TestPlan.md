## My Test Plan
## Test 1
### Preparation
* Requirement 6.ii.a:  Clicking the same operator consecutively adds only one operator to the end of the expression
* Requirement type: Functional
* Client: __________
* Test level: System

### Test Structure 
* Setup
    1. Initialize calculator
* Steps
    1. Trigger keydown "1"
    2. Trigger keydown "-"
    3. Trigger keydown "-"
* Assertions
    1. Expect display section to show "1-"

* Setup
    1. Initialize calculator
* Steps
    1. Trigger keydown "-"
    2. Trigger keydown "-"
* Assertions
    1. Expect display section to show "-"

* Setup
    1. Initialize calculator
* Steps
    1. Trigger keydown "1"
    2. Trigger keydown "-"
    3. Trigger keydown "-"
    4. Trigger keydown "2"
* Assertions
    1. Expect display section to show "1-2"

## Test 2
### Preparation
* Requirement 17: The user can click on each panel to select it
* Requirement type: UX
* Client: __________
* Test level: System

### Test Structure  
* Setup
    1. Trigger mousedown on "CALC"
* Steps
    1. Trigger mousedown on "CONVERT"
* Assertions
    1. Expect button (data-testid="testId-currency-tab") to have css class "Mui-selected"

* Setup
    1. Trigger mousedown on "CONVERT"
* Steps
    1. Trigger mousedown on "CALC"
* Assertions
    1. Expect button (data-testid="testId-calculation-tab") to have css class "Mui-selected"
    
## Test 3
### Preparation
* Requirement (non-product): utils.calculateExpression called with empty expression and a number button returns the number button's value
* Requirement type: Functional
* Client: App
* Test level: Unit

### Test Structure  
* Setup
    1. Mock calculateResult
* Steps
    1. Call calculateExpression("0", "1")
* Assertions
    1. Expect calculateResult to not be called
    2. Expect returned value to be "1"
