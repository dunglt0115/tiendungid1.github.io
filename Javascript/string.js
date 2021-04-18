/*
TEMPLATE LITERALS
Cú pháp: `${...}`
Ví dụ:
let a = 'xin chào';
let b = 'ban';
let c = (`${a} ${b}`);
*/

// Cho dù chuỗi có vượt quá 100 ký tự, vẫn nên viết liền, không tách ra, nhằm tránh broken string.

/*
JAVASCRIPT STRING METHODS
- Có thể kết hợp các method với nhau (xem trim)
*/

let a = '1234534';
let b = 'Đang test mấy cái method';
let c = '     Đang test   mấy cái   method  ';

// Length: Sử dụng để tính độ dài của một string.
console.log (a.length);

// Find Index: Sử dụng để tìm vị trí của một ký tự hoặc chuỗi ký tự trong xâu.
console.log (a.indexOf(3)); // Tìm từ trái sang phải và lấy kq đầu tiên
console.log (a.indexOf(3), 4); // Bắt đầu tìm từ vị trí số 4
console.log (a.lastIndexOf(3)); // Tìm số 3 ở cuối xâu nếu có
console.log (a.search(3)); // Dùng search thì không thêm được vị trí muốn tìm
/* Nếu tìm không ra thì kết quả trả về -1*/

// Cut string: Cắt chuỗi
console.log (a.slice(2, 5)); // Cắt chuỗi từ vị trí thứ 2, kết thúc ở thứ 5
console.log (a.slice(2)); // Cắt từ 2 đến hết
console.log (a.slice(0)); // Cắt full chuỗi
console.log (a.slice(-4, -1)); // Cắt ngược từ phải sang trái, nhưng chỉ có thể cắt theo thứ tự của chuỗi chứ không đảo ngược

// Replace: Ghi đè chuỗi
console.log (a.replace('3', 'abc')); // Thay thế ký tự 3 thành abc, chỉ thay thế được ký tự 3 đầu tiên trong chuỗi
console.log (a.replace(/3/g, 'abc')); // Thay thế toàn bộ ký tự 3 thành abc

// Convert to uppercase, lowercase
console.log (b.length.toUpperCase());
console.log (b.toLowerCase());

// Trim: Loại bỏ khoảng trắng thừa
console.log (c.trim());
console.log (c.trim().length);

/* Split: Cắt một chuỗi thành một array
Muốn cắt được thì cần tìm điểm chung tách giữa các chuỗi ký tự trong chuỗi
*/
let d = 'Khoa học, vật lý, toán học';
console.log (d.split(', '));
let e = 'Javascript';
console.log (e.split('')); // Cắt từng ký tự trong chuỗi e thành một phần của mảng

// Get a character by index
console.log (d.charAt(3)); // Lấy ra ký tự từ vị trí 3 trong chuỗi, nếu đưa số dài hơn độ dài chuỗi sẽ trả về chuỗi rỗng
console.log (d[3]); // Lấy ra ký tự từ vị trí 3 trong chuỗi, nếu đưa số dài hơn độ dài chuỗi sẽ trả về undefined