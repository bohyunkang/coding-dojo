## [키패드 누르기](https://school.programmers.co.kr/learn/courses/30/lessons/67256?language=java)
> 왼쪽, 오른쪽 엄지손가락 만으로 숫자 키패드를 누르고자 한다. 더 가까운 엄지손가락을 사용하여 키패드를 눌러보자.

### 1. 이해
![image](https://user-images.githubusercontent.com/65386533/201237348-cc5a63bc-da27-4909-be91-d6c53e4d818b.png)

Left | Center | Right
-- | -- | --
1(0, 0) | 2(0, 1) | 3(0, 2)
4(1, 0) | 5(1, 1) | 6(1, 2)
7(2, 0) | 8(2, 1) | 9(2, 2)
10(3, 0) | 11(3, 1) | 12(3, 2)
- 위 아래로 움직일 때는 /3, 좌우로 움직이는 거리는 %3

### 2. 계획
- 네번째 줄인 *, 0, # 은 10, 11, 12로 치환하여 생각한다.
- 직전의 왼손, 오른손의 위치를 저장하는 변수 leftIndex, rightIndex를 선언한다.
- 만약 번호가 1, 4, 7 또는 3, 6, 9라면 바로 L, 또는 R
- 만약 번호가 2, 5, 8, 0인 경우, 왼쪽 오른쪽 거리 비교를 하여 더 가까운 위치로 저장한다.
    - 절댓값을 기준으로 거리를 구해서 x, y 좌표의 거리 차를 합하여 리턴하는 getLength 함수를 만든다.

### 3. 실행
- 

### 4. 회고
- 처음에 문제를 이해하는 데까지 매번 시간이 오래 걸린다.. 어떻게 해야 이 문제 이해력을 높일 수 있는 것인지 고민해봐야할 타이밍...
- 결국 다른 분들 블로그에서 어떻게 풀이했는지 설명 부분을 읽어 문제 해결 방법을 이해하고 풀이를 완료하였다..
