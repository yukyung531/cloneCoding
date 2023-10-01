// 이미지 폴더에 저장해놓은 이름을 이미지 배열에 저장
const images = [
    "00.jpg",
    "01.jpg",
    "02.jpg",
    "03.jpg",
    "04.jpg",
    "05.jpg",
    "06.jpg",
    "07.jpg",
    "08.jpg",
    "09.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
];
// 이미지 배열에서 랜덤으로 이미지의 인덱스를 고른다.
const chosenImage = images[Math.floor(Math.random()*images.length)];
// 이미지 태그를 만든다.
const bgImage = document.createElement("img");
// 이미지 태그 안에 위에서 랜덤으로 고른 이미지를 넣는다.
bgImage.src = `img/${chosenImage}`;
// body태그 안에 추가한다.
document.body.appendChild(bgImage);

