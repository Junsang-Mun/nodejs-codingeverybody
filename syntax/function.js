f123(true);
console.log('A');
console.log('B');
f123();
f123(false);


function f123(goornot){
    console.log(1);
    console.log(2);
    if(goornot === true){
        console.log('Hell yeah!');
    } else if(goornot === false){
        console.log('Heaven yell...');
    } else{
        console.log('Null Null')
    }
}