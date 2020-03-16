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
	return animal && animal.name; // &&연산자 사용하여 코드 단축
}
const name2 = getName2(dog2);
console.log(name2);

/* ------------------------------------------------------*/

// const object = { name: '고한샘' };
const object = null; // false 값
const name3 = object && object.name; // false가 앞에 있으면  결과값은 앞
console.log(name3); // null

// const namelessDog = { name: '' };

// function getNameDog(animal) {
// 	const dogName = animal && animal.name;
// 	if (!dogName) {
// 		return '이름이 없는 동물입니다.';
// 	}
// 	return dogName;
// }

// const dogName = getNameDog(namelessDog);
// console.log(dogName);

const namelessDog = { name: '' };

function getNameDog(animal) {
	const dogName = animal && animal.name;
	return dogName || '이름이 없는 동물입니다.';
}

const dogName = getNameDog(namelessDog);
console.log(dogName);

console.log(false || 'hello'); // 'hello'
console.log('' || '이름없다'); // 이름없다

console.log(undefined || 'defined 되지않았다'); //defined 되지않았다

/* ------------------------------------------------------*/

// function calculateCircleArea(r) {
// 	return Math.PI * r * r;
// }

// const area = calculateCircleArea(4);
// console.log(area);

function calculateCircleArea(r) {
	const radius = r || 1;
	return Math.PI * radius * radius;
}

const area = calculateCircleArea();
console.log(area);
