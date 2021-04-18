# Closure trong JS

## Lexical Environment: xem kỹ https://javascript.info/closure
Trong Js, mỗi một function, code block, hay cả tệp script đều có một object liên kết ẩn bên trong được gọi là Lexical Environment.

LE bao gồm 2 phần:
- Environment Record: Một object chứa tất cả biến cục bộ và xem nó như property của bản thân.
- Một reference đến outer LE, cái mà liên kết với code ở đó.

### Tóm tắt theo link

__Variables__
Theo định nghĩa về LE, thì:
- Một biến là một thuộc tính của ER, được liên kết với một khối hàm, lệnh nào đó cũng ở bên trong ER.
- Làm việc với biến thực chất là làm việc với property của ER.

__Function Declaration__
- Khi file script được chạy, thì các khai báo let, const và function expressions sẽ lần lượt được khởi tạo trong LE, theo thứ tự mà chúng được viết.
- Tuy nhiên, một function declaration sẽ ngay lập tức được khởi tạo, bất kể nó ở đâu trong file script.

__Inner và Outer LE__
