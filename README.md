##  <b> modern javascript -알고있으면 유용한 자바스크립트 문법 </b>

## 01. 삼항 연산자
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
## 02. Truthy and Falsy (falsy한 값 5가지 알아두기)
  - Truthy : true 같은거...
  - Falsy : false 같은거.... 
    `falsy`한 값 5가지 : undefined, null, 0, ' ', NaN을 제외한 모든 값은 truty한 값
```javascript
    console.log(!undefined); // true
    console.log(!null); // true
    console.log(!0); //true
    console.log(!NaN); //true
    console.log(!''); //true
```

## 03. 단축 평가 논리 (short-circuit evaluation) 계산법
  - 논리 연산자 : 양옆의 값을 비교하여 true 인지 false인지 확인
  - 기존코드
  ``` javascript
  const dog = {
	name: '멍멍이'
  };
  function getName(animal) {
    if (animal) {
      return animal.name;
    }
    return undefined;
  }
  const name = getName();
  console.log(name); // undefined
  ```
  - 단축코드
  ```javascript
  const dog2 = {
	name: '뭉뭉이'
  };
  function getName2(animal) {
    return animal && animal.name;
  }
  const name2 = getName2(dog2);
  console.log(name2); // 뭉뭉이
  ```

  ### <b> && 연산자로 코드 단축시키기 </b>
  - A && B  : A가 Truthy한 값이라면 결과는 B, A가 Falsy한 값이라면 결과는 A
      ```javascript
      console.log(true && 'hello'); // hello
      console.log('hello' && 'bye'); // bye
      console.log(null && 'hello'); // null
      console.log(undefined && 'bye'); // undefined     
      ``` 
    