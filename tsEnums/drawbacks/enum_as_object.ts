// This has to do with what previously discussed about bi-directional mapping

enum Permission {
  ADMIN,
  USER,
  GUEST,
}

// tsc tsEnums/drawbacks/enum_as_object.ts

// Gets converted to the following JS object
/*
    {
        "0": "ADMIN",
        "1": "USER",
        "2": "GUEST",
        "ADMIN": 0,
        "USER": 1,
        "GUEST": 2
    }
*/

console.log(Object.values(Permission)); // ["ADMIN", "USER", "GUEST", 0, 1, 2]
