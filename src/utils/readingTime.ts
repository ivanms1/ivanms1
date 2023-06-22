export function readingTime(text: string) {
  const wordsPerMinute = 265;
  const words = text.split(/\s/g).length;
  const minutes = words / wordsPerMinute;
  const readTime = Math.ceil(minutes);
  return readTime;
}
