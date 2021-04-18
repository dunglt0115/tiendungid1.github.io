/*
Một cách viết số với nhiều số 0 đằng sau là dùng e.
Ví dụ 2e8 nghĩa là 2 x 10^8
*/

let result = 20 / 'abc';
console.log (result);
/*
Kết quả trên sẽ ra NaN.
Một cách kiểm tra liệu result có phải NaN hay không là dùng dòng code dưới.
console.log (isNaN(result));
*/

// JAVASCRIPT NUMBER METHODS

// To string: chuyển number thành string
let a = 1;
console.log (a.toString());
console.log (typeof a.toString()); // Cách kiểm tra

/* To fixed: làm tròn số
- Sau khi làm tròn thì số sẽ được chuyển thành kiểu string
- Quy tắc làm tròn giống như bên toán học
*/
let b = 32234.23453;
console.log (b.toFixed(0));