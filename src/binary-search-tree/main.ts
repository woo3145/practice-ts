import BinarySearchTree from "./binary-search-tree";

const BinarySearchTreeTest = () => {
  const binarySearchTree = new BinarySearchTree();
  binarySearchTree.insert(10);
  binarySearchTree.insert(4);
  binarySearchTree.insert(100);
  binarySearchTree.insert(50);
  binarySearchTree.insert(30);
  binarySearchTree.insert(60);
  console.log(
    "successor : ",
    binarySearchTree.get_successor(binarySearchTree.root)
  );
  binarySearchTree.delete_value(100);
  console.log(
    "successor : ",
    binarySearchTree.get_successor(binarySearchTree.root)
  );
  binarySearchTree.print_values();
  binarySearchTree.print_values_reverse();
};

export default BinarySearchTreeTest;
