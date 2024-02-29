enum OS {
  MAC = 'Mac',
  WINDOWS = 'Windows',
  LINUX = 'Linux',
}

// Demonstration purpose - not a best practice
type OsEnumUnion = `${OS}`;

type OsKey = keyof typeof OS;

const linux: OsKey = 'LINUX';
