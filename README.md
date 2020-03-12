##  <b> modern javascript -알고있으면 유용한 자바스크립트 문법 </b>

# 01. 삼항 연산자
` condition ? true : false`  => ` 조건 ? true일때 : false일때 `
```javascript
    const array = [1, 2];
    let text = ' ';
    if (array.length === 0) {
        text = '배열이 비어있습니다.';
    } else {
        text = '배열이 비어있지 않습니다.';
    }
    console.log(text); // 배열이 비어있지 않습니다.
```
- 삼항연산자로 사용 작성하는 것이 간편하나 중첩은 피하는 것이 좋다.
  
```javascript
    const array2 = [];
    let text2 =
	array2.length === 0 ? '배열이 비어있습니다.' : '배열이 비어있지 않습니다.';
    onsole.log(text2);
```
