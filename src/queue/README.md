## Queue

---

#### Queue 란

데이터를 삽입할땐 순서대로 삽입되지만 뺄때는 가장 처음 삽입한 데이터 부터 빼나가는 First-In-First-Out (FIFO) 형태의 자료구조이다.

##### 활용

- 자바스크립트의 이벤트 루프처럼 입력 된 데이터를 순서대로 처리해야 할때
- cache (가장 오래된 데이터를 삭제)
- 너비우선탐색(BFS)

### 구조

데이터를 추가하는 enqueue와 가장 앞의 데이터를 빼는 dequeue으로 이루어져 있다.

##### 구현

- [x] enqueue
- [x] dequeue