# Product Requirements
### Modes
* The calculator offers two modes:
    * Standard calculation
    * Currency conversion
* The user can switch modes via tabs, on which he can click
* The tabs will be placed at the top-most area of the calculator, named "CALC" (left tab) and "CONVERT" (right tab)
* Each tab contains two panels (ordered vertically):
    * Display panel - displaying the expression
    * Button panel - contains the tab buttons
* Each tab contains different panels, as described below

### Buttons
* The buttons are divided to 3 groups:
    * **Display-only**  
        * Clear ("C")\
        Sets the expression to "0"
        * Delete ("🠔")\
        Deletes the last character of the expression. Sets "0" if the expression length is 1
        * Result ("=")\
        Calculates the expression result. Does nothing if the expression is invalid
    * **Operators**
        * Add ("+")
        * Subtract ("-")
        * Multiply ("×")
        * Divide ("÷")
        * Dot (".")
    * **Numbers**
        * 0 to 9
        * Open parentheses - "("
        * Close parentheses - ")"
* Numbers appear in the expression in the same order they were clicked on
* Operators ...

### Standard Calculation Tab
* Contains a single display panel
* Button panel:\
    🠔 | ( | ) | ÷\
    1 | 2 | 3 | ×\
    4 | 5 | 6 | -\
    7 | 8 | 9 | +\
    C | 0 | . | =\
* Pressing "=" for a valid expression displays the correct mathematical result
* Result is rounded to a **maximum** of 4 decimal digits
* Display panel width is always fixed. Its height is extended when the expression is too long to fit

### Currency Conversion Tab