function solution(fees, records) {
  const cars = {};

  records.forEach(v => {
    // 정보 쪼개기
    // records의 각 정보를 split 메서드를 이용하여 각 시각, 차량번호, 출차 여부 정보로 나눠주고 
    let [time, car, type] = v.split(" ");
    const [hour, minute] = time.split(":");

    // 시각 정보는 HH:MM 주어지는 시각 정보를 분으로 바꿔줌
    time = hour * 60 + Number(minute);

    // 처음 조회되는 차량일 시
    if (!cars[car]) {
      cars[car] = { time: 0, car };
    }

    cars[car].type = type;

    // 차량이 나갔을 때(OUT) 현재 시각에서 
    // 미리 저장한 최근에 들어온 시각을 뺀 수(주차장에 머문 시간) 만을 누적    
    if (type == "OUT") {
        cars[car].time += time - cars[car].lastInTime;
        return;
    }
    // 차량이 들어왔을 때(IN)는 최근에 들어온 시각을 저장해줌     
    cars[car].lastInTime = time;
  });

  // 모든 정보를 활용해 차량별로 누적 이용시간을 구했으면, 
  // 해당 시간에 수식을 사용하여 주차 요금 값으로 바꿔줌
  return Object.values(cars)
    // 주차 요금 값으로 바꾸기 전에 차량 번호순으로 정렬
    .sort((a, b) => a.car - b.car)
    .map(v => {
      // 차량이 최종적으로 나가지 않았을 때
      // 23:59에서 최근에 들어온 시각을 뺀 값을 추가로 더해줌
      if (v.type == "IN") {
        v.time += 1439 - v.lastInTime;
      }

      // 기본시간을 넘지 않았을 때 기본 금액을 반환
      if (fees[0] > v.time) {
        return fees[1];
      }

      // 기본 시간을 넘었을 때 기본 금액에 추가로 넘은 시간 단위에 금액 단위를 곱하여 추가 요금을 부과
      return fees[1] + Math.ceil((v.time - fees[0]) / fees[2]) * fees[3];
    });
}
