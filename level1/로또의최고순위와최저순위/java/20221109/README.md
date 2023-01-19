## [로또의 최고 순위와 최저 순위](https://school.programmers.co.kr/learn/courses/30/lessons/77484?language=java)
알아볼 수 없게된 일부 번호 0을 최고 순위와 최저 순위를 통해 알아보고자 한다.

### 1. 이해
- 순서에 상관없이 당첨 번호가 내 번호에 존재하면 일치한 것으로 친다.
- 0의 경우 당첨번호였을 경우, 낙첨 번호였을 경우를 비교해 최고 순위와 최저 순위를 결정한다.

### 2. 계획
- `lottos`(내 번호)에 0이 몇 개 있는지 센다.
- `lottos`(내 번호)에 일치하는 번호는 몇 개인지를 센다.
- `bestNumsCount`와 `worstNumsCount`를 구한다.
    - `bestNumsCount`: 일치하는 번호 + 0의 갯수
    - `worstNumsCount`: 일치하는 번호
- `bestNumsCount`와 `worstNumsCount`가 몇 등인지 구한다.

### 3. 실행
- 

### 4. 회고
- 우선 시간 안에 풀기 위해서 for문으로 작성하였다. 저녁에 stream api로 다시 풀어보고 회고를 작성해보겠다!
