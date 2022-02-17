console.log(f123(true));
console.log(f123(false));
console.log(f123());


function f123(goornot){
    if(goornot === true){
        return 'go';
    } else if(goornot === false){
        return 'stop';
    } else{
        return 'mol?ru';
    }
}