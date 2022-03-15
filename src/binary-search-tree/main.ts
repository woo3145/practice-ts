import BinarySearchTree from "./binary-search-tree";

const BinarySearchTreeTest = () => {
  const binarySearchTree = new BinarySearchTree();
  binarySearchTree.insert(3);
  binarySearchTree.insert(4);
  binarySearchTree.insert(5);
  binarySearchTree.insert(2);
  console.log(binarySearchTree.is_value(1));
};

export default BinarySearchTreeTest;
