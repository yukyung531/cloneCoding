const loginForm = document.getElementById("login-form");
const loginInput=document.querySelector("#login-form input")
const greeting=document.querySelector("#greeting")

// 두 번 이상 쓰이는 단어는 이렇게 대문자 변수로 만들어 주면 오타날 가능성이 줄어듦
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    // 새로고침되는 것을 막아줌
    event.preventDefault();
    // classList를 사용하면 특정 단어를 추가, 삭제 가능!!
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    // 임시DB로 쓰이는 localStorage에 입력한 username 저장
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// localStorage에 저장해 둔 username 가져오기
const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null){
    // 저장된 username이 없다면 로그인 폼에 값 입력했을 때 onLoginSubmit 함수가 실행
    loginForm.addEventListener("submit", onLoginSubmit);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
}else{
    // 저장된 username이 있다면 paintGreetings 함수 실행
   paintGreetings(savedUserName);
}

