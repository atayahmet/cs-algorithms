export function hash(key: string, size: number) {
  const length = key.length;
  const chars = key.split('');
  let sum = chars[length - 1].charCodeAt(0);
  chars.forEach((char, i) => sum = (chars[length - i - 1].charCodeAt(0)) + i + (size * sum));
  return (sum % size);
}
