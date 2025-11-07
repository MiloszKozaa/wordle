export interface ILetter {
  base: string;
  alt?: string;
}

const letters: ILetter[][] = [
  [
    { base: 'Q' },
    { base: 'W' },
    { base: 'E', alt: 'Ę' },
    { base: 'R' },
    { base: 'T' },
    { base: 'Y' },
    { base: 'U' },
    { base: 'I' },
    { base: 'O', alt: 'Ó' },
    { base: 'P' },
  ],
  [
    { base: 'A', alt: 'Ą' },
    { base: 'S', alt: 'Ś' },
    { base: 'D' },
    { base: 'F' },
    { base: 'G' },
    { base: 'H' },
    { base: 'J' },
    { base: 'K' },
    { base: 'L', alt: 'Ł' },
  ],
  [
    { base: 'Z', alt: 'Ż' },
    { base: 'X', alt: 'Ź' },
    { base: 'C', alt: 'Ć' },
    { base: 'V' },
    { base: 'B' },
    { base: 'N', alt: 'Ń' },
    { base: 'M' },
  ],
];

export default letters;
