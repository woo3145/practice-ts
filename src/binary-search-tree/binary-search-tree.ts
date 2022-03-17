class Node {
  value: number;
  left: Node | null = null;
  right: Node | null = null;
  constructor(value: number) {
    this.value = value;
  }
}

class BinarySearchTree {
  root: Node | null;
  constructor() {
    this.root = null;
  }

  insert(value: number) {
    const node = new Node(value);
    let current: Node | null = this.root;

    if (!current) {
      this.root = node;
      return;
    }

    let prev: Node | null = current;
    while (current) {
      prev = current;
      if (current.value < node.value) {
        current = current.right;
      } else if (current.value > node.value) {
        current = current.left;
      } else {
        console.log("중복 된 값이 존재합니다.");
        return;
      }
    }
    if (prev.value < node.value) {
      prev.right = node;
    } else {
      prev.left = node;
    }
  }

  is_value(value: number) {
    let current = this.root;
    let ok = false;
    while (current) {
      if (current.value === value) {
        ok = true;
        break;
      } else if (current.value < value) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
    return ok;
  }

  get_min() {
    let current = this.root;
    if (!current) {
      console.log("트리에 노드가 존재하지 않습니다.");
      return;
    }
    while (current.left) {
      current = current.left;
    }

    return current.value;
  }

  get_max() {
    let current = this.root;
    if (!current) {
      console.log("트리에 노드가 존재하지 않습니다.");
      return;
    }
    while (current.right) {
      current = current.right;
    }

    return current.value;
  }

  get_successor(node: Node | null) {
    let current = node?.right;

    if (!current) {
      console.log("오른쪽 서브트리가 존재하지 않습니다.");
      return;
    }

    while (current.left) {
      current = current.left;
    }

    return current.value;
  }

  delete_value(value: number) {
    let current = this.root;
    let prev = current;
    while (current) {
      if (current.value === value) {
        break;
      }
      prev = current;
      if (current.value < value) {
        current = current.right;
      } else {
        current = current.left;
      }
    }

    if (!current) {
      console.log("삭제할 데이터가 없습니다.");
      return;
    }

    // 자식이 없음
    if (!current.left && !current.right) {
      if (prev?.left?.value === value) {
        prev.left = null;
      } else if (prev?.right?.value === value) {
        prev.right = null;
      }
      // 자식이 둘
    } else if (current.left && current.right) {
      const successor = this.get_successor(current);
      successor && this.delete_value(successor);
      successor && (current.value = successor);
      // 자식이 하나
    } else {
      if (current.left) {
        prev?.left?.value === value && (prev.left = current.left);
        prev?.right?.value === value && (prev.right = current.left);
      } else if (current.right) {
        prev?.left?.value === value && (prev.left = current.right);
        prev?.right?.value === value && (prev.right = current.right);
      }
    }
  }
}

export default BinarySearchTree;
