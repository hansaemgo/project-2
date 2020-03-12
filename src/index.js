/////////////////////삼항연산자//////////////////////////////////
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
