-- Pass by value và Pass by reference trong JS --

*Kiểu dữ liệu nguyên thủy (NT):
- Number
- String
- Boolean
- Undefined
- Null
- Symbol

*Kiểu dữ liệu phức tạp: Object

-------------------

1. Trong JS, tất cả các đối số đều là pass by value. Nghĩa là khi một đối số được passed từ một biến, thì thứ đối số nhận được là bản copy những gì lưu trữ trong biến, chứ không phải là bản thân biến đó.

Đối với NT, mỗi NT lưu trữ thẳng giá trị mà bạn khai báo, tức là nó có ô RAM địa chỉ và ô RAM giá trị riêng.

Khi khai báo một biến chứa NT, thì biến này nhận hết 2 cái đó. Khi biến này được pass, thì một bản copy sẽ được pass. Thay đổi bản copy sẽ không làm ảnh hưởng gì đến biến ban đầu.

*** Example code:

function square(x) {
    x = x * x;
    return x;
}
let y = 10;
let result = square(y);
console.log(y); // 10 -- no change
console.log(result); // 100

*** And:

let string = 'Hello world';
let favoriteString = string; // Kết nối 2 biến với nhau
favoriteString = 'Hello everyone'; // Gán một NT mới, ngắt kết nối, mỗi biến có ô địa chỉ và ô giá trị khác nhau

console.log(favoriteString); // Logs 'Hello everyone'
console.log(string); // Logs 'Hello world'

---------------

2. Đối với object, khi gán object vào một biến, thì biến này chỉ nhận được ô RAM địa chỉ của object, chứ không nhận được ô giá trị.

Vì vậy, khi pass vào một đối số, thì một bản copy ô địa chỉ sẽ được pass. Khi đó, đối số và object đều có chung một ô địa chỉ. Thay đổi giá trị của đối số, tức là khiến ô địa chỉ thay đối đi, nên object ban đầu cũng sẽ bị ảnh hưởng.

*** Example code:

function foo(obj){
    obj.someProp = 100;
}

let obj = {
    someProp : 50
};

foo(obj);

console.log(obj.someProp); // 100

*** And:

function changeStuff(a, b)
{
    a.item = "changed";
    b = {item: "changed"};
}

let obj1 = {item: "unchanged"};
let obj2 = {item: "unchanged"};

changeStuff(obj1, obj2);

console.log(obj1.item); // changed
console.log(obj2.item); // unchanged

-> Ở đây có một thuật ngữ là "Call-by-sharing". Giải thích đơn giản thì trong JS, một đối số sẽ nhận được item là pass by value, nhưng bản thân cái item đó lại là một reference.

Nghĩa là nếu cố gắng thay đổi đi cả tham số gốc (như với obj2), thì sẽ không có tác dụng. Vì thay đổi đó sẽ tạo ra một tham số mới với ô địa chỉ và ô giá trị mới.

Nhưng nếu thay đổi đi nội dung bên trong của tham số gốc (như với obj1), thì sẽ có tác dụng, vì item được pass vào bản thân là một referance, nên nó sẽ kết nối với tham số gốc.