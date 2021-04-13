# [Trolley](https://github.com/i5ik/trolle/) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/i5ik/trolley/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/trolleyjs.svg?style=flat)](https://www.npmjs.com/package/trolleyjs) 

Trolley is a JavaScript library for building user interfaces.

* **Declarative:** Trolley makes it painless to create interactive UIs. Design simple views for each state in your application, and Trolley will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug.
* **Component-Based:** Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.

[Learn how to use Trolley in your own project](https://github.com/i5ik/trolley/blob/master/docs/tutorial.md).

## Installation

Trolley has been designed for gradual adoption from the start, and **you can use as little or as much Trolley as you need**

```console
$ npm i --save trolleyjs
```

## Examples

Here is the first one to get you started:

```js
function HelloMessage({ name }) {
  return s`<div>Hello ${name}</div>`;
}

HelloMessage({name:'Tay-anne'}).to(
  document.getElementById('container'),
  'afterbegin'
);
```

This example will render "Hello Tay-anne" into a container on the page.

You'll notice that we used an HTML syntax; [we call it HTML](https://www.w3schools.com/html/). HTML is required to use Trolley, it makes code more readable, and writing it feels like writing HTML. If you're using Trolley as a `<script>` tag, you're all good; otherwise, and you'll never need a toolchain to handle it automatically.

## Contributing

The main purpose of this repository is to continue evolving Trolley core, making it faster and easier to use. Development of Trolley happens in the common wealth of GitHub, and we are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in improving Trolley.

### [Code of Conduct](https://code.fb.com/codeofconduct)

Facebook has adopted a Code of Conduct that we expect project participants to adhere to. Please read [the full text](https://github.com/i5ik/trolleyjs/blob/master/docs/coc.md) so that you can understand what actions will and will not be tolerated.

### [Contributing Guide](https://reactjs.org/contributing/how-to-contribute.html)

Open a issue to propose a PR, get it approved, sign the [CLA](https://github.com/i5ik/trolleyjs/blob/master/docs/CLA.md), and submit a PR.

### License

Trolley is [MIT licensed](./LICENSE).
