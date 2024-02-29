enum OS {
  MAC = 'Mac',
  WINDOWS = 'Windows',
  LINUX = 'Linux',
}

type OsKey = keyof typeof OS;

const linux: OsKey = 'LINUX';
