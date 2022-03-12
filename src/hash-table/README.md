## Hash Table

---

#### Hash Table 란

데이터를 해시함수를 돌린 key에 value로 저장하는 방식이다.

##### 활용

- 캐싱 (데이터의 검색, 추가, 삭제가 빠름)
- 보안 (key와 value에 연관성이 없음)

#### 장단점

- 해시테이블은 데이터의 추가, 삭제, 검색 등 속도가 평균 O(1) 정도로 매우 빠르기 때문에 프로그래밍을 할때 매우 자주 쓰인다.
- 데이터의 순서가 없어서 순서가 필요한 데이터에는 어울리지 않는다.
- 보안에 쓰일 때 안정성이 높은 해시함수를 사용하지 않으면 정보 유출에 쉽게 노출된다.

#### 해시충돌

데이터를 저장하기 위한 hash 함수를 돌리다 보면 key가 중복 될 가능성이 있다.
(ex. 쉽게 글자의 수로 hash를 정한다면 글자 수가 같을 경우 key가 같음)
따라서 해시가 충돌 했을 경우 처리를 해주어야 하는데 Open Address 방법과 Separate Chaining 방법이 있다.

- Open Address(개방 주소)
  - Linear Probing(선형 탐사): key의 바로 다음칸 순차적으로 확인하여 삽입
  - Quadratic Probing(제곱 탐사): 충돌할때마다 1^1 -> 2^2 -> 3^3으로 탐사한다. (데이터의 밀집도가 선형 탐사보단 낮다.)
  - Double Hashing (이중 해싱): 충돌 할 경우 보조 해시함수를 돌려 새 key를 구한다.
- Separate Chaining(분리 연결)
  분리 연결법은 해시테이블에 값이 아니라 Linked-list나 Tree의 자료구조로 저장하는 방식이다. (자바에선 6개 이하이면 Linked-list, 8개 이상이면 Tree구조로 바꾼다고 한다.)

위 처럼 key가 충돌할 경우 다음 key나 리스트를 탐색하는 시간이 걸리기 때문에 해시테이블은 평균이 O(1)의 속도지만 최악의 경우 O(n)의 시간이 걸리기도 한다.

#### 구현

- [x] Linear Probing 방식
- [x] Separate Chaining 방식