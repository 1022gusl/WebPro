// 예제 1
function double(n) {
  // 5
  console.log(`두 배 결과: ${n * 2}`); // 6
}

function processNumber(callback) {
  // 2
  const num = 5; // 3
  callback(num); //4
}

processNumber(double); // 1

console.log('프로그램 종료!'); // 7

/* 실행결과 
  ---------------------------------
  두 배 결과: 10
  프로그램 종료!
  ---------------------------------
  */

// 예제 2
function printUpper(text) {
  // 5
  console.log(`대문자 변환: ${text.toUpperCase()}`); // 6
}

function handleText(callback) {
  // 2
  const word = 'javascript'; // 3
  callback(word); // 4
}

handleText(printUpper); // 1
console.log('작업 완료!'); // 7

/* 실행결과 
  ---------------------------------
  대문자 변환: JAVASCRIPT
  작업 완료!
  ---------------------------------
  */

// 예제 3
function showLength(arr) {
  // 5
  console.log(`배열 길이: ${arr.length}`); // 6
}

function getArray(callback) {
  // 2
  const items = ['사과', '배', '바나나']; // 3
  callback(items); // 4
}

getArray(showLength); // 1
console.log('프로그램 끝!'); // 7

/* 실행결과 
  ---------------------------------
  배열 길이: 3
  프로그램 끝!
  ---------------------------------
  */
