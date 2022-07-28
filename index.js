const axios = require('axios').default

class Book {
  constructor (id, title, authors, description, publisher, publishedDate, thumbnailURL, totalItems) {
    this.id = id
    this.title = title
    this.authors = authors
    this.description = description
    this.publisher = publisher
    this.publishedDate = publishedDate
    this.thumbnailURL = thumbnailURL
    this.totalItems = totalItems
  }
}

export async function getBook (name) {
  const url = 'https://www.googleapis.com/books/v1/volumes'
  const params = { q: name, maxResults: 1 }

  const res = await axios.get(url, { params })
  if (res.data.items === undefined) {
    return 1
  }
  const data = res.data.items[0]
  const volumeInfo = data.volumeInfo

  return new Book(
    data.id,
    volumeInfo.title,
    volumeInfo.authors,
    volumeInfo.description,
    volumeInfo.publisher,
    volumeInfo.publishedDate,
    volumeInfo.imageLinks.thumbnail,
    data.totalItems
  )
}
