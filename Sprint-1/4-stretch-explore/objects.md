## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?

```
/ƒ log() { [native code] }
```

Now enter just `console` in the Console, what output do you get back?

```
console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}assert: ƒ assert()clear: ƒ clear()context: ƒ context()count: ƒ count()countReset: ƒ countReset()createTask: ƒ createTask()debug: ƒ debug()dir: ƒ dir()dirxml: ƒ dirxml()error: ƒ error()group: ƒ group()groupCollapsed: ƒ groupCollapsed()groupEnd: ƒ groupEnd()info: ƒ info()log: ƒ log()memory: MemoryInfo {totalJSHeapSize: 16100000, usedJSHeapSize: 13400000, jsHeapSizeLimit: 3760000000}profile: ƒ profile()profileEnd: ƒ profileEnd()table: ƒ table()time: ƒ time()timeEnd: ƒ timeEnd()timeLog: ƒ timeLog()timeStamp: ƒ timeStamp()trace: ƒ trace()warn: ƒ warn()Symbol(Symbol.toStringTag): "console"[[Prototype]]: Object
```

Try also entering `typeof console`

```
'object'
```

Answer the following questions:

What does `console` store?

```
console it stores the web console also known as the  debugging console
```

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

```
1.console.log outputs a message to the console
2.console.assert writes an error message to the console if the assertion is false. If the assertion is true, nothing happens.
3. `.` access to an object function
```
