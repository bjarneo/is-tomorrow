# isTomorrow
Is your date tomorrow?


## WHY?
Because I really messed up the easy isTomorrow logic at work.


## Install

```
$ npm i --save is-tomorrow
```


## Usage

```js
const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

isTomorrow(today); // false
isTomorrow(tomorrow); // true

```


## License

MIT © [Bjarne Øverli](https://oeverli.win)