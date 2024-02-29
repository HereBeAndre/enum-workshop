// A string enum has unidirectional mapping

enum Framework {
  REACT = 'React',
  EXPRESS = 'Express',
}

// gets converted to the following JS object
/*
    {
        "REACT": "React",
        "EXPRESS": "Express"
    } 
*/

// where each member gets mapped unidirectionally to its runtime object property.

console.log(Framework.REACT); // React
//@ts-expect-error
console.log(Framework.React); // Property 'Personal' does not exist on type 'typeof Framework'. Did you mean 'REACT'?

console.log(Framework[0]); // Element implicitly has an 'any' type because expression of type '0' can't be used to index type 'typeof Framework'. Property '0' does not exist on type 'typeof Framework'.(7053)

// ________________________________________________________________________________________

// A numeric enum has bi-directional mapping

enum FrameworkUuid {
  REACT,
  EXPRESS = 3,
  DJANGO,
}

// gets converted to the following JS object
/*
    {
        "0": "REACT",
        "3": "EXPRESS",
        "4": "DJANGO",
        "REACT": 0,
        "EXPRESS": 3,
        "DJANGO": 4
    }
*/

// where each member gets mapped bi-directionally to its runtime object property.

const djangoById = FrameworkUuid[4];
const djangoByLtr = FrameworkUuid.DJANGO;

console.log(djangoById); // "DJANGO"
console.log(djangoByLtr); // 4
console.log(FrameworkUuid[6]); // undefined
