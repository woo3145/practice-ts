export const binarySearch = (arr: number[], value: number) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === value) {
      return { index: mid, value };
    } else if (arr[mid] < value) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return { index: -1, value: null };
};

export const binarySearchRecursive = (
  arr: number[],
  value: number,
  low: number,
  high: number
): { index: number; value: number | null } => {
  if (low > high) {
    return { index: -1, value: null };
  }

  const mid = Math.floor((low + high) / 2);
  if (arr[mid] === value) {
    return { index: mid, value };
  } else if (arr[mid] < value) {
    return binarySearchRecursive(arr, value, mid + 1, high);
  } else {
    return binarySearchRecursive(arr, value, low, mid - 1);
  }
};
