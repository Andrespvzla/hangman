let words: string[] = [
  'AVOCADO',
  'CAR',
  'TELEPHONE',
  'LAPTOP',
  'HOME',
  'SOCCER',
  'BASEBALL',
  'KEYBOARD',
];

export function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}
