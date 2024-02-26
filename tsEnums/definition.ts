/*
Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript.

Enums allow to define a set of named constants.
Using enums can make it easier to document intent, or create a set of distinct cases.
TypeScript provides numeric, string-based and heterogeneous enums:
*/

// numeric
enum DirectionNum {
  Up = 1,
  Down,
  Left,
  Right,
}
// auto-incrementing and can leave off initializers.

// string-based
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
  Up = 0,
  Down = 'Down',
}
// enums allow this, even though it's not advised that you do so.
