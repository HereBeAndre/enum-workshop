// Get the types from your data

const PERMISSION_LEVEL = {
  ADMIN: 'ADMIN',
  USER: 'USER',
  GUEST: 'GUEST',
} as const;

type PermissionLvl = (typeof PERMISSION_LEVEL)[keyof typeof PERMISSION_LEVEL];

function logPermission(level: PermissionLvl) {
  console.log(`Logged in with ${level} permission`);
}

logPermission('ADMIN');
logPermission(PERMISSION_LEVEL.GUEST);
