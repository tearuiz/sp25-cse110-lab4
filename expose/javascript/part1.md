# Answers to Questions 1-7 
NOTE: List numbers correlate to question number
1. The line 9 prints *values added: 20*.
2. The line 13 prints *final result: 20*.
3. We should avoid using *var* because it is function-scoped, meaning that the ```result``` variable can be accessed outside of the if-function in this example. This is dangerous as one may make the mistake of using ```result``` in the ```else``` statement, which would cause *undefined* to print, leading to added confusion for the programmer. 
4. If we change ```var``` to ```let```, line 9 still prints *values added: 20*.
5. Line 13 will result in a ```ReferenceError``` because ```let``` is block-scoped, meaning that the ```result``` variable defined in the ```if``` statement cannot be accessed outside of that block. 
6. Changing ```let``` to ```const``` results in a ```TypeError``` in line 7, as any variables declared as a constant cannot be changed. In this scenario, result tries to become 20 when it can only be 0. Line 9 is not executed. 
7. Line 13 will not be reached as line 7 throws the ```TypeError```

  
