# Personalized Calculator - Product Requirements
### Modes
1. The calculator offers two modes:
    * Standard calculation
    * Currency conversion
1. The user can switch modes using tabs placed at the top-most area of the calculator
1. The tabs are named "CALC" (left tab) and "CONVERT" (right tab)
1. A tab content is composed of two sections (ordered vertically):
    * Display section - panel(s) displaying the expression(s)
    * Button section - contains the tab buttons
1. Each tab contains different looking sections, as described below

    ### Buttons
1. The buttons are divided to 3 groups:
    1. **Display-only**  
        1. Clear ("C")  
        Sets the expression to "0"
        1. Delete ("🠔")  
        Deletes the last character of the expression. Sets "0" when clicked with expression of length 1
        1. Result ("=")  
        Calculates the expression result. Does nothing if the expression is invalid (including division by 0)
    
    1. **Operators**
        * Add ("+")
        * Subtract ("-")
        * Multiply ("×")
        * Divide ("÷")
        * Dot (".")
        <br/>
        Two consecutive operators must not appear in the display panel:
        <br/>
        a. Clicking the same operator consecutively adds only one operator to the end of the expression.
        <br/>
        b. Clicking different operators consecutively replaces the previous operator with the new one.
        
    1. **Numbers**
        * 0 to 9
        * Open parentheses - "("
        * Close parentheses - ")"
        <br/>
        a. Numbers appear in the display panel in the same order they were clicked on. No restrictions.
1. These requirements apply to every mode in the calculator
1. The user can type an expression using the keyboard too, by the following rules:
    * Operators and numbers are mapped to their matching keyboard keys
    * Clear button has no matching key
    * Delete button is mapped to Backspace key
    * Result button is mapped to Enter key
    * All other keys do nothing
    
    The requirements mentioned above (for buttons) are applied to keyboard typing as well

    ### Standard Calculation Tab
1. Display section - a single panel
1. Button section:  
    🠔 | ( | ) | ÷  
    1 | 2 | 3 | ×  
    4 | 5 | 6 | -  
    7 | 8 | 9 | +  
    C | 0 | . | =
1. After pressing "=" with a valid expression, the correct mathematical result is displayed in the display panel
1. Result is rounded to a **maximum** of 4 decimal digits
1. Display panel width is always fixed. Its height is extended downwards when the expression is too long to fit

    ### Currency Conversion Tab
1. Display section - two panels, one above the other.  
The top panel represents the base currency and the bottom panel represents the other currency
1. Button section:  
    1 | 2 | 3  
    4 | 5 | 6  
    7 | 8 | 9  
    C | 0 | 🠔
1. Between the display panels and the button panel, this text is shown:  
`1 {base currency icon} = {rate}{other currency icon}` 
1. The user can click on each panel to select it
1. The selected panel displays the expression the user inserted. The unselected panel **immediately** displays the conversion result, based on the current exchange rate
1. Conversion result is rounded to a **maximum** of 4 decimal digits
1. Both display panels width is always fixed. Their height is extended downwards when the expression is too long to fit
1. Rate should be fetched on the calculator's initial load
    1. A loading spinner is displayed while the data is being fetched
    1. In case of error, an alert-box should pop with the error details. The calculator is not displayed
    