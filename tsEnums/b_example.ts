// enum Genre {
//   FANTASY,
//   ROMANCE,
//   THRILLER,
//   MEMOIR,
// }

interface Book {
  uuid: number;
  author: string;
  title: string;
  genre: number;
}

const bookOne: Book = {
  uuid: 1,
  author: 'foo',
  title: "Foo's book",
  genre: 0,
};

const bookTwo: Book = {
  uuid: 2,
  author: 'bar',
  title: "Bar's book",
  genre: 1,
};
