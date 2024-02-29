enum Genre {
  // SCIFI,
  FANTASY,
  ROMANCE,
  THRILLER,
  MEMOIR,
}

interface BookWithGeneric<T> {
  uuid: number;
  author: string;
  title: string;
  genre: T;
}

const bookOne: BookWithGeneric<Genre.FANTASY> = {
  uuid: 1,
  author: 'foo',
  title: "Foo's book",
  genre: 0,
};

// ________________________________________________________________

interface Book {
  uuid: number;
  author: string;
  title: string;
}

interface ThrillerBook extends Book {
  genre: Genre.THRILLER;
}

const bookTwo: ThrillerBook = {
  uuid: 2,
  author: 'bar',
  title: "Bar's book",
  // @ts-expect-error
  genre: 4,
};
