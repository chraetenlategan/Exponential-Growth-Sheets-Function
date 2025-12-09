# EXP_GROW Function - Usage & Help

This file contains instructions on how to use the `EXP_GROW` Google Sheets function, including formulas and examples.

## 1. Installing the Function

1. Open your Google Sheet.  
2. Go to **Extensions → Apps Script**.  
3. Create a new project and paste the code from `exp_grow.gs`.  
4. Save the project.

## 2. How to Use in Sheets

### Single Value
```plaintext
=EXP_GROW(startValue, step)

startValue = the starting number

step = row number or step in the sequence

Example:

=EXP_GROW(100, 1)  // Returns 100 × (1 + 1% growth)
Multiple Values (Array)
=ARRAYFORMULA(EXP_GROW(100, SEQUENCE(50,1)))
Generates 50 steps of exponentially growing values
Outputs in a vertical column

##3. Formula-Only Version (Optional)
If you prefer a single-cell formula without Apps Script:

=A1 * (1 + 0.01 * 1.01^(ROW(A1)))


Place your starting value in A1.
Drag down or use with ARRAYFORMULA for multiple steps.


4. Tips

You can change the initial growth rate by adjusting 0.01 (1%) in the Apps Script.
The 1.01 factor controls how fast the growth rate increases per step.
Use ARRAYFORMULA to generate entire sequences automatically.

##5. Example Output
Step	Value
1	  |  100
2	  |  101.01
3	  |  102.03
4	  |  103.06
5	  |  104.10





