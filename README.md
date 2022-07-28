# README WIP (WORK IN PROGRESS)

# Getting started
Use the `getBook` function to get a `Book`.
Example:
```javascript
const instaplot = require("instaplot");

(async () => {
    const book = await instaplot.getBook("the magic of thinking big");
    console.log(book)
})();
```

# Book
A `Book` object has these attributes from Google Books API
- `id`
- `title`
- `authors`
- `description`
- `publisher`
- `publishedDate`
- `thumbnailURL`
- `totalItems`

# getBook
The `getBook` function currently takes only one argument `name`.
