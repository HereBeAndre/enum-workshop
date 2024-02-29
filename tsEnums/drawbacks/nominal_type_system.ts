// Nominal Type System

/* Even though TypeScript has a structural type system 
( doesn't care about names of things, it cares about their value at runtime), things change when dealing with enums.
*/

enum PermissionLevel {
  ADMIN = 'ADMIN',
  USER = 'USER',
  GUEST = 'GUEST',
}

function log(level: PermissionLevel) {
  console.log(`Logged in with ${level} permission`);
}

log(PermissionLevel.ADMIN);

// @ts-expect-error this is where rules are broken and TS acts as nominal type system for enums
log('ADMIN');

// NOTE: some devs consider this a benefit as it plays quite well with refactorings
