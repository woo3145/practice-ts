import Queue from "../queue";

describe("Queue Test", () => {
  describe("enqueue", () => {
    test("빈 queue에 데이터 추가", () => {
      const queue = new Queue<number>();

      queue.enqueue(1);
      expect(queue.size()).toBe(1);
    });
    test("queue에 데이터 여러개 추가", () => {
      const queue = new Queue<number>();

      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      queue.enqueue(4);
      expect(queue.size()).toBe(4);
    });
  });

  describe("dequeue", () => {
    test("빈 queue에서 dequeue", () => {
      const queue = new Queue<number>();

      expect(queue.dequeue()).toBe(null);
      expect(queue.size()).toBe(0);
    });
    test("일반적인 dequeue", () => {
      const queue = new Queue<number>();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      queue.enqueue(4);
      expect(queue.size()).toBe(4);
      expect(queue.dequeue()).toBe(1);
      expect(queue.dequeue()).toBe(2);
      expect(queue.dequeue()).toBe(3);
      expect(queue.dequeue()).toBe(4);
      expect(queue.size()).toBe(0);
    });
  });
});
