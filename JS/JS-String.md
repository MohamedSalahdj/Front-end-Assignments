## Strings

### Template Strings

Templates were introduced with ES6 (JavaScript 2016).

Templates are strings enclosed in backticks (`This is a template string`).

Templates allow single and double quotes inside a string:

```js
let text = `Hello, how Old are you "Ahmed"?`
```

### String Length 

To find the length of a string, use the built-in `length` property:

```js
let name = "Ahmed Saad";
let length = name.length;
```

## Escape Characters

```js
let text = "We are the so-called "Vikings" from the north.";

// you can use an backslash escape character.

let = "We are the so-called \"Vikings\" from the north.";

let text= 'It\'s alright.';

let text = "The character \\ is called backslash.";
```



| **Code** | **Result**           |
| -------- | -------------------- |
| \b       | Backspace            |
| \f       | Form Feed            |
| \n       | New Line             |
| \r       | Carriage Return      |
| \t       | Horizontal Tabulator |
| \v       | Vertical Tabulator   |



## String Methods

### Extracting String Characters

- The `at(*position*)` Method
- The `charAt(*position*)` Method
- The `charCodeAt(*position*)` Method
- Using property access [] like in arrays

#### JavaScript String charAt()

The `charAt()` method returns the character at a specified index (position) in a string:

```js
let text = "HELLO WORLD";
let char = text.charAt(0);
```

#### JavaScript String at()

[ES2022](https://www.w3schools.com/js/js_2022.asp) introduced the string method `at()`:

The `at()` method returns the character at a specified index (position) in a string.

```js
const name = "W3Schools";
let letter = name.at(2); 
```

The `at()` method is a new addition to JavaScript.

It allows the use of negative indexes while `charAt()` do not.

Now you can use `myString.at(-2)` instead of `charAt(myString.length-2)`.

```js
let text = "HELLO WORLD";
let char = text[0];
```

## Note

Property access might be a little **unpredictable:**

- It makes strings look like arrays (but they are not)
- If no character is found, [ ] returns undefined, while charAt() returns an empty string.
- It is read only. str[0] = "A" gives no error (but does not work!)

```js
let text = "HELLO WORLD";
text[0] = "A";  // Gives no error, but does not work
```

#### Extracting String Parts