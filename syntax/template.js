let name = "어쩌고"
let letter = name+"님께"+"\n봄바람을 있는 이상의 가지에 노래하며 힘차게 얼마나 대고, 아니다. \n같은 없는 같이, 있는가? 공자는 풀이 예수는 그들의 설산에서 용감하고 넣는 일월과 철환하였는가? \n안고, 이 아름답고 아름다우냐? 날카로우나 위하여 방황하였으며, 꾸며 그리하였는가?";
// console.log(letter);


let a = 1;

//template literal : ``으로 묶고 ${}으로 변수 치환해주기


let template = `
${name}님께

봄바람을 잇는 이상의 가지에 노래하며 힘차게 얼마나 대고, 아니다. ${name}
길은 없는 것 같이 있는가? 공자는 풀이 예수는 설산에서 용감하게 철환하였는가?
아니다, 이 얼마나 아름다우냐? 날카로우나 위해 방황했으며, 그리하였는가? ${1+2+"문단"}
`;

console.log(template);