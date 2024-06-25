export function createRangeArray(start: number, end: number): number[] {
  if (start > end) {
    throw new Error("Start should be less than or equal to end.");
  }

  const result: number[] = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}
