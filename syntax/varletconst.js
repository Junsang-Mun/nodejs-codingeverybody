let a = "one"; 
//let a = "two"; //let은 재선언이 불가능: already been declared

if(true){
    let a = "two";
    console.log(a); //two
}

console.log(a); //one

/* let은 scope의 차이에 따라 다르게 사용이 가능함 */


/////////////////////////

const b = "hell";
console.log(b);
//b = "heaven"; //const는 재할당이 불가능: assignment to constant variable
//const b = "heaven"; //const는 재선언도 불가능: already been declared