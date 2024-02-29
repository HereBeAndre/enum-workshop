enum Office {
  Belgrade = 'Belgrade',
  London = 'London',
  Rotterdam = 'Rotterdam',
  Stockholm = 'Stockholm',
}

type OfficeEnumUnion = `${Office}`;

type OfficeUnion = 'Belgrade' | 'London' | 'Rotterdam' | 'Stockholm';
