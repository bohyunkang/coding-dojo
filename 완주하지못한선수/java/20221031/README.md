## [완주하지 못한 선수](https://school.programmers.co.kr/learn/courses/30/lessons/42576?language=java)
마라톤에 참가한 선수의 배열(participant)과 그 마라톤을 완주한 선수의 배열(completion)을 입력받아 그 중 완주하지 못한 선수의 이름을 반환한다.
ex.
- participant: `["leo", "kiki", "eden"]`
- completion: `["eden", "kiki"]`
- 결과: `"leo"`

### 1. 이해
- participant 배열과 completion 배열을 비교하여 없는 이름을 반환해야 한다.
- 배열을 순회하기보다 hashMap 등을 활용하여 더 손쉽게 해결할 수 있는 방법은 없을까?
- 근데 만약 동명이인이 있는 경우는 어떻게 처리하지?

### 2. 계획
- hashMap을 사용해서 participant를 관리하고, 해당 값을 가지고 있는지 확인하는 메서드를 사용해서 해당 value의 유무를 확인한다.
- Map의 key를 이름, value를 카운트로 관리하여 동명이인의 경우, value가 증가하게끔 작성한다.
- iterator를 돌면서 완주한 선수가 있다면 value인 카운트를 -1해주고, 최종적으로 count가 0이 아닌 선수가 완주하지 못한 선수가 된다. 

### 3. 실행
- 

### 4. 반성
- 우선 Map이라는 자료구조를 처음 써본 것에 대해서 칭찬하고 싶다.
- 다만 for와 while-loop을 사용하여 문제풀이를 했는데, stream을 사용해서도 문제 풀이가 가능하다면 다음엔 그렇게 도전해보자!  
