
## [N개의 최소공배수](https://school.programmers.co.kr/learn/courses/30/lessons/12953?language=java)
N개의 숫자가 담긴 배열을 받아 그 숫자들의 최소공배수를 구하는 문제. ex) `[2,6,8,14] => 168`

### 1. 이해
- 두 개 이상의 숫자가 담긴 배열을 입력받는다.
- 그 숫자들의 최소 공배수를 구한다. (유클리드 호제법)
  ![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F9938193C5DFF1AE430)

### 2. 계획
1. 두 수의 최대공약수를 구한다.
2. 두 자연수의 곱 / 최대공약수으로 최소 공배수를 구한다.
3. 여러번 그 연산을 반복해 배열의 최소공배수를 구한다.

### 3. 실행
- 

### 4. 회고
- 20220922 코딩 도장 문제였던 [최대공약수와 최소공배수](https://github.com/bohyunkang/coding-dojo/pull/27) 문제에서 이미 유클리드 호제법에 대해 알고 있었기 때문에 문제 풀이는 그렇게 어렵지 않았다! 하여 오늘은 for문, stream으로 총 두번 풀어보았다!
