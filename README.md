# simPLe-article-takeover

Take over PL (Presentation Later) articles with a single `div`.

eg.

![master-news-web news-web-developer presentation-layer abc-prod net au_news_2021-04-30_takeover_100102372_terminusBaseURL=https___api-preview private terminus abc-prod net au_api_v2](https://user-images.githubusercontent.com/437566/116630079-f1fc5800-a995-11eb-8019-49c4acf39a9c.png)

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

