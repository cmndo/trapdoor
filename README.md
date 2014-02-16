# Trapdoor

To break your script and drop into an eval loop with access to local variables:


```
require('trapdoor');
eval(trapdoor.open);
```