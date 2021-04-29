# simPLe-article-takeover

Take over PL (Presentation Later) articles full-width with a single `div`.

eg.

<img src="https://user-images.githubusercontent.com/437566/116630079-f1fc5800-a995-11eb-8019-49c4acf39a9c.png" width=360 />

## Usage

In console:

```bash
$ npm install simple-article-takeover
```

In JS:

```javascript
import takeover from "simple-article-takeover"

// In an async function
await takeover()
// ... other stuff happens

// Can set a custom class on the div
or await takeover({ addClass: "article-container" })
```

