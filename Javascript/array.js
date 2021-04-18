let a = ['1', '2', '3', '4']; // Tạo mảng
console.log (Array.isArray(a)); // Kiểm tra xem có phải là mảng hay không
console.log (Array.isArray([a])); // Dùng dấu ngoặc vuông vẫn đúng, nhưng ngoặc nhọn thì sẽ thành object

// Lấy phần tử theo index
console.log (a[0]);
console.log (a[-3]); // Nếu không có phần tử này sẽ trả về undefined

/* ARRAY METHODS */
let b = ['javascript', 'php', 'ruby'];

// 1. toSrting: Chuyển sang string
console.log (b.toString()); // Chuyển sang string nhưng dính sát nhau 
console.log (b.join('\n')); // Chuyển sang string nhưng phân tách linh động

// 2. pop: Xóa phần tử cuối mảng và in ra phần tử đó
console.log (b.pop());
console.log (b.pop());
console.log (b.pop()); // Xóa hết phần tử thì mảng sẽ thành mảng rỗng
console.log (b.pop()); // Tiếp tục xóa thì lệnh sẽ trả về undefined
console.log (Array.isArray(b)); // Vẫn là kiểu dữ liệu mảng

// 3. push: Thêm phần tử vào cuối mảng và trả về độ dài mới của mảng
console.log (b.push('dart', null));

// 4. shift: Xóa phần tử đầu mảng và in ra phần tử đó (tương tự pop)
console.log (b.shift());

// 5. unshift: Tương tự push nhưng là thêm phần tử vào đầu mảng
console.log (b.unshift('java'));

// 6. splice: Xóa phần tử, chèn phần tử mới
b.splice (1, 1, 123); // Số đầu tiên truyền vào là vị trí cắt, số thứ 2 là số phần tử cắt, từ dấu phẩy thứ 3 là chèn thêm
console.log (b);

// 7. concat: Merge 2 mảng
console.log (a.concat(b)); // Mảng gọi đến hàm concat sẽ là mảng gốc, tức trong TH này là mảng a

// 8. slice: Cắt, tương tự bên string
