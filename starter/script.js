const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*
// Destructuring
// The whole point of this destructuring example is to practice as if I were trying to
// extract specific data from an API, you can do that like this below, or via array destru..
// ..cturing
const book = getBook(1);

//const title = book.title;
//const author = book.author;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(title, author, genres);

//const primaryGenre = genres[0];
//const secondaryGenre = genres[1];

//This is array destructuring
// '...otherGenres' is considered rest operator - has to be the last in the array
// also we created the name otherGenres so give rest operator your own variable name
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

console.log(primaryGenre, secondaryGenre, otherGenres);

// '...generes' is considered spread operator - can be first or last - last would look like
// ["epic fantasy", ...genres] and epic fantasy would be first in array
const newGenres = [...genres, "epic fantasy"];
newGenres;

const updatedBook = {
  ...book,
  // Adding a new Property
  moviePublicationDate: "2001-12-19",
  // Overwriting an exisiting property
  pages: 1210,
};
updatedBook;

// Arrow functions
const getYear = (str) => str.split("-")[0];

// Example of Template Literal
// kinda like fstrings in python, used so you can use (tilda)`${expression}`
const summary = `${title}, a ${pages}-page long book, was written by ${author}, and published in ${getYear(
  publicationDate
)}. The book has ${hasMovieAdaptation ? "" : "not"}been adapted as a movie.`;
summary;

// Ternary Operator
// if pages(num) greater 1000 = true print over a thousand, if false print less
// than a thousand
const pagesRange = pages > 1000 ? "over a thousand" : "less than a thousand";
pagesRange;
console.log(`The book has ${pagesRange} pages.`);

// Short Circuting and &&(and), ||(or), and ?? operators
// ?? operator that takes two values and returns
// the right handed value if the left handed value is UNDEFINED or NULL,
// else return the left handed value

// Optional Chaining
// for librarything in the chain when you get towards the end 'librarything?.'
// the question mark indicates that if the left side of the ? returns UNDEFINED
// or NULL, then just dont go any further therefore making the left side false
//
// So now that the left side of ?? is false, return the right side which = 0
function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads.reviewCount;
  const librarything = book.reviews?.librarything?.reviewCount ?? 0;
  librarything;
  return goodreads + librarything;
}

console.log(getTotalReviewCount(book));
*/

// getTotalReview Count function from previous code
function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads.reviewCount;
  const librarything = book.reviews?.librarything?.reviewCount ?? 0;
  librarything;
  return goodreads + librarything;
}

// Array Map method
// three types of arrays: map, filter, and reduce (functional array methods)
const books = getBooks();

// map method will loop over an array and return a new array w the same len
// with some operation applied to each of the elements of the original array
// simple example done with arrow function
const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

// script example
const titles = books.map((book) => book.title);
titles;

// This example shows how to get data from books, but there are two ways
// to write this
// Way 1 (with return)

const essentialDataTest = books.map((book) => {
  return {
    title: book.title,
    author: book.author,
  };
});

essentialDataTest;

// Way 2 (without return & with parenthesis)
const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  // You can also do computational things in here
  reviewsCount: getTotalReviewCount(book),
}));
essentialData;

// Array filter method
// need to return a result that is true or false
// in filter, you can also chain multiple array methods
const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooksWithMovie;

// Side Note:
// adventureBooks = books..
// this books, is coming from const books at the beginning
// vs
// .filter((x) => x) is coming from within filter
// .map((y) => y) is coming from within map
const adventureBooks = books
  .filter((x) => x.genres.includes("adventure"))
  .map((y) => y.title);
adventureBooks;
