/* TypeScript Enums at Compile Time and Runtime

At compile time:
- TypeScript compiles an enum to a IIFE which then injects into
runtime:
- a JavaScript object representation.

For example: */

enum Office {
  BELGRADE = 'Belgrade',
  LONDON = 'London',
  ROTTERDAM = 'Rotterdam',
  STOCKHOLM = 'Stockholm',
}

// Gets compiled to the following IIFE
/*
var Office;
(function (Office) {
    Office["BELGRADE"] = "Belgrade";
    Office["LONDON"] = "London";
    Office["ROTTERDAM"] = "Rotterdam";
    Office["STOCKHOLM"] = "Stockholm";
})(Office || (Office = {}));
*/

// which then injects the following JavaScript object at runtime
/*
  {
    BELGRADE: 'Belgrade',
    LONDON: 'London',
    ROTTERDAM: 'Rotterdam',
    STOCKHOLM: 'Stockholm',
  }
*/
