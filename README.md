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
  - 특정값이 유효할 때 만, 특정값을 조회해야할 때, 주로 사용한다.
    ```javascript
    // const object = { name: '고한샘' }; // true 제대로된 값이면 이름이 나온다
    const object = null; // false 값
    const name3 = object && object.name; // false가 앞에 있으면  결과값은 앞
    console.log(name3); // null
    ```
    ```javascript
    console.log(true && 'hello'); // hello
    console.log('hello' && 'bye'); // bye
    console.log(null && 'hello'); // null
    console.log(undefined && 'bye'); // undefined     
    ``` 

  ### <b> || 연산자로 코드 단축시키기 </b>  
  - A || B : 어떤 값이 Falsy 하다면 대체할 값을 지정해 줄 때 유용하게 사용할 수 있다.
  - 기존코드
  ```javascript
  const namelessDog = { name: '' };
  function getNameDog(animal) {
    const dogName = animal && animal.name;
    if (!dogName) {
      return '이름이 없는 동물입니다.';
    }
    return dogName;
  }

  const dogName = getNameDog(namelessDog);
  console.log(dogName);  // '이름이 없는 동물입니다.'
  ```
  - 단축코드 
  ```javascript
  const namelessDog = { name: '' };

    function getNameDog(animal) {
      const dogName = animal && animal.name;
      return dogName || '이름이 없는 동물입니다.';
    }

  const dogName = getNameDog(namelessDog);
  console.log(dogName); // '이름이 없는 동물입니다.'
  ```
  ```javascript
  console.log(false || 'hello'); // 'hello'
  console.log('' || '이름없다'); // 이름없다
  console.log(undefined || 'defined 되지않았다'); //defined 되지않았다
  ```