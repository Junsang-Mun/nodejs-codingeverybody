//CRUD: Create. Read. Update. Delete: 파일 입출력의 기본
//[]: arrary literal
let cat = ['black', 'white', 'yellow', 'moo'];
let i = 0;
while(cat[i] !== undefined){
    console.log(cat[i]);
    i++;
}

console.log('\n\n')
i = 0;
cat.push('chaos');

while(cat[i] !== undefined){
    console.log(cat[i]);
    i++;
}