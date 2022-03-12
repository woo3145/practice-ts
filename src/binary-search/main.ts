import { binarySearch } from "./binary-search";

const BinarySearchTest = () => {
  let idx = 0;

  const arr = Array.from({ length: 200 }, () => {
    idx += 2;
    return idx;
  });

  const { index, value } = binarySearch(arr, 260);
  if (idx === -1) {
    console.log("찾는 값이 없습니다.");
  } else {
    console.log(`찾는 값: ${value}, 인덱스: ${index}`);
  }
};

export default BinarySearchTest;
