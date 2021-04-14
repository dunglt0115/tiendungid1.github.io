// Bài tập 1: Viết chương trình hiển thị ngày giờ

function showDateAndTime()
{
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    
    document.getElementById('bt1--date').innerHTML = date;
    document.getElementById('bt1--time').innerHTML = time;
}

/* Bài tập 2: In ra ngày tháng năm theo định dạng
mm-dd-yyyy
mm/dd/yyyy
dd-mm-yyyy
dd/mm/yyyy
*/

function showDateWithFormats()
{
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();

    if (dd < 10)
    {
        dd = '0' + dd;
    }

    if (mm < 10)
    {
        mm = '0' + mm;
    }

    today = mm + '-' + dd + '-' + yyyy;
    document.getElementById('bt2--format1').innerHTML = today;

    today = mm + '/' + dd + '/' + yyyy;
    document.getElementById('bt2--format2').innerHTML = today;

    today = dd + '-' + mm + '-' + yyyy;
    document.getElementById('bt2--format3').innerHTML = today;

    today = dd + '/' + mm + '/' + yyyy;
    document.getElementById('bt2--format4').innerHTML = today;
}

// Bài tập 3: Kiểm tra một số nguyên đã cho có chuỗi chữ số tăng hay không
function increasingDigits()
{
    let num = document.getElementById("bt3input").value;

    if (typeof num != "number")
    {
        return document.getElementById('bt3').innerHTML = false;
    }

    let interFunc = value => Number(value);
    let arrFromNumber = Array.from(String(num), interFunc);
    let result = true;

    for (let i = 0; i < arrFromNumber.length - 1; i++)
    {
        if (parseInt(arrFromNumber[i]) >= parseInt(arrFromNumber[i + 1]))
        result = false;
    }

    return document.getElementById('bt3').innerHTML = result;
}

// Bài tập 4: Thay thế mọi ký tự trong một chuỗi đã cho với ký tự theo sau nó trong bảng chữ cái
function alphabetAfter()
{
    let str = document.getElementById("bt4input").value;

    if (typeof str !== "string")
    {
        return document.getElementById('bt4').innerHTML = false;
    }

    let chars = str.split('');

    for (let i = 0; i < chars.length; i++)
    {
        let n = chars[i].charCodeAt() - 'a'.charCodeAt();
        n = (n + 1) % 26;
        chars[i] = String.fromCharCode(n + 'a'.charCodeAt());
    }

    let join = chars.join('');

    return document.getElementById('bt4').innerHTML = join;
}

// Bài tập 5: Viết chương trình để tạo chuỗi bằng cách sử dụng ba ký tự ở giữa của một chuỗi có độ dài lẻ
function threeCharsMiddle()
{
    let str = String(prompt('Nhập 1 chuỗi ký tự'));
    let mid = str;

    if (mid.length%2 == 0)
    {
        return document.getElementById('bt5').innerHTML = 'Vui lòng nhập chuỗi có độ dài lẻ';
    }

    if (str.length%2 != 0)
    {
        let n = (str.length + 1)/2;
        mid = str.slice(n - 2, n + 1);
    }

    return document.getElementById('bt5').innerHTML = mid;
}

// Bài tập 6: Viết chương trình hiển thị số xuất hiện nhiều lần nhất trong mảng
function numberManyTimes ()
{
    let num = Number(prompt('Nhập 1 số'));
    let interFunc = value => Number(value);
    let arrFromNumber = Array.from(String(num), interFunc);
    let count1 = 0;
    let count2 = 0;
    let item;

    for (let i = 0; i < arrFromNumber.length; i++)
    {
        for (let j = i; j < arrFromNumber.length; j++)
        {
            if (arrFromNumber[i] == arrFromNumber[j])
            {    
                count1++;
            }

            if (count2 < count1)
            {
                count2 = count1;
                item = arrFromNumber[i];
            }
        }
    
        count1 = 0;
    }

    return document.getElementById('bt6').innerHTML = `Số ${item} xuất hiện nhiều lần nhất`;
}

// Bài tập 7: Kiểm tra xem chuỗi có chứa 'java' hay không
function checkJavaAppear()
{
    let str = String(prompt('Nhập 1 chuỗi ký tự'));
    let check = false;

    if (str.indexOf('java') != -1)
    {
        check = true;
    }

    return document.getElementById('bt7').innerHTML = check;
}

// Bài tập 8: Viết một hàm để lấy tên tháng từ một số cụ thể
function printMonthName()
{
    let num = Number(prompt('Nhập 1 số'));
    switch (num)
    {
        case 1:
            document.getElementById('bt8').innerHTML = 'Tháng 1';
            break;

        case 2:
            document.getElementById('bt8').innerHTML = 'Tháng 2';
            break;

        case 3:
            document.getElementById('bt8').innerHTML = 'Tháng 3';
            break;

        case 4:
            document.getElementById('bt8').innerHTML = 'Tháng 4';
            break;

        case 5:
            document.getElementById('bt8').innerHTML = 'Tháng 5';
            break;

        case 6:
            document.getElementById('bt8').innerHTML = 'Tháng 6';
            break;

        case 7:
            document.getElementById('bt8').innerHTML = 'Tháng 7';
            break;

        case 8:
            document.getElementById('bt8').innerHTML = 'Tháng 8';
            break;

        case 8:
            document.getElementById('bt8').innerHTML = 'Tháng 9';
            break;

        case 10:
            document.getElementById('bt8').innerHTML = 'Tháng 10';
            break;

        case 11:
            document.getElementById('bt8').innerHTML = 'Tháng 11';
            break;

        case 12:
            document.getElementById('bt8').innerHTML = 'Tháng 12';
            break;
            
        default:
            document.getElementById('bt8').innerHTML = 'Vui lòng nhập số từ 1 - 12.';
            break;
    }
}

// Bài tập 9: Nhập một chuỗi và tìm từ dài nhất trong chuỗi
function findLongestWord()
{
    let str = String(prompt('Nhập 1 chuỗi ký tự'));
    let strArr = str.split(' ');
    let longest = 0;
    let word;

    for (let i = 0; i < strArr.length; i++)
    {
        if (longest < strArr[i].length)
        {
            longest = strArr[i].length;
            word = strArr[i];
        }
    }

    document.getElementById('bt9').innerHTML = word;
}

// Bài tập 10: Nhập 2 số và in ra giá trị là số nguyên tố giữa 2 số đó
function findPrimeNumbers()
{
    let firstNumber = parseInt(prompt('Nhập số thứ nhất'));
    let secondNumber = parseInt(prompt('Nhập số thứ hai'));
    let inter;

    if (firstNumber > secondNumber)
    {
        inter = firstNumber;
        firstNumber = secondNumber;
        secondNumber = inter;
    }

    for (let i = firstNumber; i <= secondNumber; i++)
    {
        let prime = 0;

        for (let j = 2; j < i; j++)
        {
            if (i % j == 0)
            {
                prime = 1;
                break;
            }
        }

        if (i > 1 && prime == 0)
        {
            document.getElementById('bt10').innerHTML = 000;
        }
    }
}
