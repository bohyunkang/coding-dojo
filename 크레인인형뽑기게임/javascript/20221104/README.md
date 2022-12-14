## [크레인 인형뽑기 게임](https://school.programmers.co.kr/learn/courses/30/lessons/64061?language=java)

게임 화면의 격자의 상태가 담긴 2차원 배열 board와 인형을 집기 위해 크레인을 작동시킨 위치가 담긴 배열 moves가 매개변수로 주어질 때, 크레인을 모두 작동시킨 후 터트려져 사라진 인형의 개수를 return 하도록 solution 함수를 완성하는 문제

### 1. 이해

![image](https://user-images.githubusercontent.com/65386533/199860708-a6e4b6c1-1703-41f9-b5a2-79b58ba2dcdb.png)

- 위 사진과 같이 제공받은 2차원 배열 board(왼쪽)를 moves의 순서에 맞춰 열마다 뽑아온다.
- 그렇게 뽑아온 숫자중에 똑같은 숫자가 나란히 있는 경우 해당 숫자들은 제거된다.
- 최종적으로 제거된 숫자들의 갯수가 정답이 된다.

### 2. 계획

- 뽑은 인형을 담을 Stack 배열을 준비하고 기본적으로 0을 세팅해놓는다.
- moves의 길이만큼 순회하면서 board의 길이만큼 다시 순회한다.
- 만약 board[j][move - 1]이 0이라면 인형이 없는 것이기 때문에 무시한다.
- 0이 아니라면 Stack의 가장 윗 요소와 board[j][move - 1]가 같은지 비교한다.
- 같다면 인형이 터지는 것이기 때문에 Stack에 pop을 하고 answer에 2를 더한다.
- 다르다면 Stack에 board[j][move - 1]를 push한다.
- answer를 리턴한다.

### 3. 실행

-

### 4. 회고

- 자바스크립트 경우에도 자바와 똑같이 문제 풀이를 하여서 풀이가 다를 게 없다. 자바는 Stack 컬렉션을 사용했지만, 자바스크립트는 배열에서 해당 기능을 제공하고 있기 때문에 배열을 만들어서 풀이하였다. 다만 어제와 똑같이 오늘도 불변성을 지키지 못했는데 불변성을 지키는 방식으로 다시 한번 풀이해보자!
