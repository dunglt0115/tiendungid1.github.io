# Shallow copy và Deep copy trong JS

## Những cách phổ biến để copy object trong JS:

__Cách 1:__
const obj = {a:1,b:2,c:3};
const clone = Object.assign({},obj);
console.log(clone); // {a:1,b:2,c:3};

__Cách 2:__
const obj = {a:1,b:2,c:3};
const clone = {...obj};
console.log(clone); // {a:1,b:2,c:3};

__Cách 3:__
const obj = {a:1,b:2,c:{d:3}}
const clone = JSON.parse(JSON.stringify(obj));
console.log(clone); // {a:1,b:2,c:3};

> Notes: Trong 3 cách copy object trên thì 2 trong số đó là thuộc shallow copy, đó là Object.assign(), và Spread Operator. Còn deep copy chính là cách thứ 3 - Sử dụng JSON.parse() và JSON.stringify().
--------
## Shallow copying nhiệm vụ của nó là chỉ sao chép các giá trị đối tượng bình thường, nhưng các giá trị lồng nhau vẫn sử dụng reference đến một đối tượng ban đầu.

_Example code:_
const obj = {a:1,b:2,c:{d:3}};
const shallowClone = {...obj};
obj.c.d = 34; // chúng ta thay đổi giá trị d của object gốc
console.log(obj); // kết quả cho chúng ta thấy {a:1,b:2,c:{d:34}} 
console.log(shallowClone); // nhưng object mà chúng ta clone ra cũng bị thay đổi theo {a:1,b:2,c:{d:34}}

## Ngược lại, deep copy đơn giản là cũng giống như clone shallow nhưng các giá trị reference trong object gốc không thay trong object clone. Khi update giá trị của gốc thì clone không bị ảnh hưởng.

_Example code:_
const obj = {a:1,b:2,c:{d:3}};
const deepClone = JSON.parse(JSON.stringify(obj));
console.log(deepClone); // {a:1,b:2,c:3};

obj.c.d = 34;
console.log(obj); // {a:1,b:2,c:{d:34}}
console.log(deepClone); // {a:1,b:2,c:{d:3}}