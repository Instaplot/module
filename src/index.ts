const axios = require('axios').default

class Book {
  id: string;
  title: string;
  authors: string[];
  description: string;
  publisher: string;
  publishedDate: Date;
  thumbnailURL: string;

  constructor(id: string, title: string, authors: string[], description: string, publisher: string, publishedDate: Date, thumbnailURL: string) {
      this.id = id;
      this.title = title;
      this.authors = authors;
      this.description = description;
      this.publisher = publisher;
      this.publishedDate = publishedDate;
      this.thumbnailURL = thumbnailURL;
  }
}

export async function getBook (name: string) {
  const url = 'https://www.googleapis.com/books/v1/volumes';
  const params = { q: name, maxResults: 1 };

  const res = await axios.get(url, { params });
  const data = res.data.items[0];
  const volumeInfo = data.volumeInfo;
  
  return new Book(
    data.id,
    volumeInfo.title,
    volumeInfo.authors,
    volumeInfo.description,
    volumeInfo.publisher,
    volumeInfo.publishedDate,
    volumeInfo.imageLinks.thumbnail
  );
}
