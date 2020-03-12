////////////////////// 삼항연산자 ///////////////////////////////
////////////////////////////////////////////////////////////////
const array = [1, 2];
let text = ' ';
if (array.length === 0) {
	text = '배열이 비어있습니다.';
} else {
	text = '배열이 비어있지 않습니다.';
}
console.log(text);

const array2 = [];
let text2 =
	array2.length === 0 ? '배열이 비어있습니다.' : '배열이 비어있지 않습니다.';

console.log(text2);

///////////////////// Truthy and Falsy //////////////////////////////
////////////////////////////////////////////////////////////////////

console.log(!undefined); // true
console.log(!null); // true
console.log(!0); //true
console.log(!NaN); //true
console.log(!''); //true

/////////////////////단축평가논리계산법//////////////////////////////
////////////////////////////////////////////////////////////////////

console.log(true && 'hello'); // true && true
console.log(!3); // false
console.log(true && 'hello');
console.log('hello' && 'bye'); // bye
console.log(null && 'hello'); // null
console.log(undefined && 'bye'); // undefined

/* ------------------------------------------------------*/

const dog = {
	name: '멍멍이'
};

function getName(animal) {
	if (animal) {
		return animal.name;
	}
	return undefined;
}

/* ------------------------------------------------------*/

const name = getName(dog);
console.log(name);

const dog2 = {
	name: '뭉뭉이'
};
function getName2(animal) {
	return animal && animal.name;
}
const name2 = getName2(dog2);
console.log(name2);
