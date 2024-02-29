/*
Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript.

Enums are constants based data structures that store a set of named constants.
In TypeScript, enums are a feature that injects runtime JavaScript objects to an application 
in addition to providing usual type-level extensions.
TypeScript provides numeric, string-based and heterogeneous enums:
*/

// numeric | all enum members are of type number
enum DirectionNum {
  Up = 1,
  Down,
  Left,
  Right,
}
// auto-incrementing and can leave off initializers.

// string-based | all enum members are of type string
enum DirectionStr {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}
// each member has to be constant-initialized with a string literal, or with another string enum member.
// No auto-incrementing behavior, but string enums “serialize” well.

// heterogeneous
enum DirectionHeterogeneus {
  Up,
  Down = 'Down',
}
// enums allow this, even though it's not advised that you do so.
