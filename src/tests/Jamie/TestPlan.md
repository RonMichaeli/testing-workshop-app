## My Test Plan
## Test 1
### Preparation
* Requirement 12: Result is rounded to a maximum of 4 decimal digits
* Requirement type: Functional
* Client: __________
* Test level: System

### Test Structure  
* Setup
    1. Clear the calculator
* Steps
    1. Evaluate 10/3
* Assertions
    1. Expect result to be 3.3333

* Setup
    1. Clear the calculator
* Steps
    1. Evaluate 20/3
* Assertions
    1. Expect result to be 6.6667

## Test 2
### Preparation
* Requirement 3: The tabs are named "CALC" (left tab) and "CONVERT" (right tab)
* Requirement type: UX
* Client: __________
* Test level: System

### Test Structure  
* Setup
    1. N/A
* Steps
    1. Extract text of left tab
* Assertions
    1. Expect text to be "CALC"
    
* Setup
    1. N/A
* Steps
    1. Extract text of right tab
* Assertions
    1. Expect text to be "CONVERT"
    
## Test 3
### Preparation
* Non-Product Requirement: calculateExpression performs correctly
* Requirement type: Functional
* Client: __________
* Test level: Unit

* NOTE: Even though internally calcaulteExpression is implemented via some internal
        functions (e.g., calculateResult, cleanExpression, etc). calculateExpression
        is tested as a whole.

### Test Structure  
* Setup
    1. N/A
* Steps
    1. Call function with sample input (currentExpression, button) 
* Assertions
    1. Expect result to be new expression

The above step and assertion will be repeated numerous times to cover as many cases as possible

