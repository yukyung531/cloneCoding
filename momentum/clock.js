const clock = document.querySelector("h2#clock");

function getClock(){
    // Date(): 시간을 가져올 수 있는 함수
    const date = new Date();
    // PadStart(숫자1, "숫자2") : 해당 문자의 크기가 숫자1 보다 작다면 해당 문자 앞에 숫자2를 붙인다.
    // PadEnd(숫자1, "숫자2") : 해당 문자의 크기가 숫자1 보다 작다면 해당 문자 뒤에 숫자2를 붙인다.
    // 위의 두 함수는 문자열에만 사용 가능 => String()으로 문자열 타입으로 만들어준 후 사용
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText= `${hours}:${minutes}:${seconds}`;
}

getClock();
// 1초(1000ms)마다 해당 함수 실행
setInterval(getClock, 1000);