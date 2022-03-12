import { HashTable } from "./hash-table";

const HashTableTest = () => {
  console.log("****** Hash Table Test ******");
  const hashTable = new HashTable(10);
  hashTable.set("1");
  hashTable.set("2");
  hashTable.set("3");
  hashTable.set("4");
  hashTable.set("5");
  hashTable.set("6");
  hashTable.set("7");
  hashTable.set("8");
  hashTable.set("9");
  hashTable.set("10");
  hashTable.set("11");
  hashTable.remove("8");
  console.log(hashTable.get("1"));
  console.log(hashTable.get("2"));
  console.log(hashTable.get("3"));
  console.log(hashTable.get("4"));
  console.log(hashTable.get("5"));
  console.log(hashTable.get("6"));
  console.log(hashTable.get("7"));
  console.log(hashTable.get("8"));
  console.log(hashTable.get("9"));
  console.log(hashTable.get("10"));
};

export default HashTableTest;
