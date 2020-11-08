## My Test Plan
## Test 1
### Preparation
* Requirement (number or description): User can clear input
* Requirement type: UX
* Client: end users
* Test level: System

### Test Structure  
* Setup
    1. render calculator
    2. type numbers
* Steps
    1. type 'c'
* Assertions
    1. view returned to initial state

## Test 2
### Preparation
* Requirement (number or description): show and use updated currency
* Requirement type: UX
* Client: end users
* Test level: System

### Test Structure  
* Setup
    1. mock currency exchange api
* Steps
    1. navigate to convert tab
    2. type numbers in upper field
    3. type numbers in lower field
* Assertions
    1. see conversion rate
    2. see correct number in lower field
    3. see correct number in upper field
    
## Test 3
### Preparation
* Requirement (number or description): show error when dividing by zero
* Requirement type: UX
* Client: User
* Test level: Integration

### Test Structure  
* Setup
    1. type numbers
    2. type divide
    3. type zero
* Steps
    1. click equal
* Assertions
    1. get error
    2. see error on screen
