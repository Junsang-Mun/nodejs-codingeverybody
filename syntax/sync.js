const fs = require('fs');

/* 동기형 실행 :
    콘솔에 'A'를 찍음
    -> sample.txt를 가져와서 result에 저장
    -> 콘솔에 result를 찍음
    -> 콘솔에 C를 찍음

    비동기형 실행 :
    콘솔에 'A'를 찍음
    그리고 sample.txt를 가져와서 result에 저장하고 콘솔에 찍는 동시에
    콘솔에 C를 찍음

*/

const start1 = new Date();
console.log('A');
const result = fs.readFileSync('nodejs/sample.txt', 'utf8');
console.log(result);
console.log('C');
const end1 = new Date();
const time1 = end1 - start1;
console.log('1st: ' + time1 + '\n\n'); 

/* 콘솔:
A
가는 불러 가는 이상의 꽃 얼음에 찬미를 생의 이것이다. 
별과 길을 커다란 구하지 사는가 힘있다. 같이, 뼈 어디 그와 바이며, 
별과 않는 소담스러운 인도하겠다는 운다. 우리의 대고, 
것은 듣기만 꾸며 생의 열락의 아름다우냐? 
있는 사는가 산야에 커다란 그들은 예수는 피부가 가는 꽃이 것이다. 
인류의 풀이 같은 사라지지 그들의 가슴이 아니더면, 있는 구할 것이다. 
사는가 우리 밝은 이 눈이 이상, 스며들어 있음으로써 뿐이다. 
인생을 대고, 그와 봄바람이다. 때에, 그들은 옷을 방황하여도, 있는 커다란 가치를 아니다. 
기쁘며, 그림자는 우리 그들의 대중을 인생을 부패를 이것이다.
C
1st: 3
*/



const start2 = new Date();
console.log('A');
fs.readFile('nodejs/sample.txt', 'utf8', function(error, result) {
    console.log(result);
});
console.log('C');
const end2 = new Date();
const time2 = end2 - start2;
console.log('2nd: ' + time2 + '\n\n');

/* 콘솔:
A
C
2nd: 0


가는 불러 가는 이상의 꽃 얼음에 찬미를 생의 이것이다. 
별과 길을 커다란 구하지 사는가 힘있다. 같이, 뼈 어디 그와 바이며, 
별과 않는 소담스러운 인도하겠다는 운다. 우리의 대고, 
것은 듣기만 꾸며 생의 열락의 아름다우냐? 
있는 사는가 산야에 커다란 그들은 예수는 피부가 가는 꽃이 것이다. 
인류의 풀이 같은 사라지지 그들의 가슴이 아니더면, 있는 구할 것이다. 
사는가 우리 밝은 이 눈이 이상, 스며들어 있음으로써 뿐이다. 
인생을 대고, 그와 봄바람이다. 때에, 그들은 옷을 방황하여도, 있는 커다란 가치를 아니다. 
기쁘며, 그림자는 우리 그들의 대중을 인생을 부패를 이것이다. 
*/