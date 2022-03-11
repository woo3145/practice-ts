import HashTable from "./hash-table";

const HashTableTest = () => {
  console.log("****** Hash Table Test ******");
  const hashTable = new HashTable(10);
  hashTable.set("hhh");
  hashTable.set("hhh");
  hashTable.set("hhh");
  hashTable.set("hhh");
  hashTable.set("hhh");
  hashTable.set("hhh");
  hashTable.set("hhw");
  hashTable.set("hhw");
  console.log(hashTable.get("hhh"));
};

export default HashTableTest;
