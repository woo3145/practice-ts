import BinarySearchTree from "./binary-search-tree";

const BinarySearchTreeTest = () => {
  const binarySearchTree = new BinarySearchTree();
  binarySearchTree.insert(10);
  binarySearchTree.insert(4);
  binarySearchTree.insert(100);
  binarySearchTree.insert(50);
  binarySearchTree.insert(30);
  console.log(binarySearchTree.is_value(5));
  console.log(binarySearchTree.get_min());
  console.log(binarySearchTree.get_max());
  console.log(binarySearchTree.get_successor(binarySearchTree.root));
};

export default BinarySearchTreeTest;
