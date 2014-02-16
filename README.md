# Trapdoor


Inspired by [Pry](http://www.pryrepl.org)


A tool to get to drop into an eval loop within your running Node.js app. Allowing you view values and modify values of variables, as well as executing functions and evaluate expressions.


```
require('trapdoor');
eval(trapdoor.open);
```