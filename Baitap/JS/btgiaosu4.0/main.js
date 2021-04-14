// Khai báo mảng chứa kết quả
let dataSubmit = [];

// Khai báo biến gọi tới element
let submitElement = document.getElementById("submit--item");
let nameInput = document.getElementById("name--item");
let cateInput = document.getElementById("cate-item");
let cateArr = ["None", "Tiên", "Thần", "Ma", "Quỷ", "Yêu", "Linh", "Nhân"];
let imagePreview = document.getElementById("preview--image");

// Preview ảnh
let loadFile = function (event) {
    imagePreview.src = URL.createObjectURL(event.target.files[0]);
}

function validate () {
    submitElement.addEventListener("click", checkName);
    submitElement.addEventListener("click", checkCate);
    submitElement.addEventListener("click", addImage);

    function checkName () {
        let numbers = /^[0-9]+$/;

        if (nameInput.value.trim() == "" || nameInput.value.trim() == null) {
            document.querySelector(".name__error--message").style.display = "block";
            document.querySelector(".name__error--message").innerHTML = "*Chưa nhập kìa bạn";
            console.log (false);
        }

        else if (nameInput.value.length >= 10) {
            document.querySelector(".name__error--message").style.display = "block";
            document.querySelector(".name__error--message").innerHTML = "*Vui lòng nhập ít hơn 10 ký tự";
            console.log (false);
        }

        else if (nameInput.value.charAt(0).match(numbers)) {
            document.querySelector(".name__error--message").style.display = "block";
            document.querySelector(".name__error--message").innerHTML = "*Ký tự đầu tiên không thể là một số";
            console.log (false);
        }

        else {
            document.querySelector(".name__error--message").style.display = "none";
            dataSubmit.push(nameInput.value);
        }
    };

    function checkCate () {
        if (cateInput.value === "") {
            document.querySelector(".cate__error--message").style.display = "block";
            document.querySelector(".cate__error--message").innerHTML = "*Chọn class bạn ei";
            console.log (false);
        }

        else {
            document.querySelector(".cate__error--message").style.display = "none";
            dataSubmit.push(cateInput.value);
        }
    };

    function addImage () {
        if (dataSubmit.length != 0 && imagePreview.src) {
            dataSubmit.push(imagePreview.src);
        }

        else {
            console.log (false);
        }
    }
}

// Khai báo tạo element
let orderOutput = 0;
let orderMaker = document.createElement("li");
let nameMaker = document.createElement("input");
let cateMaker = document.createElement("select");

let imageMaker = document.createElement("img");
imageMaker.style.width = "200px";
imageMaker.style.height = "50px";

let editBtnMaker = document.createElement("button");
editBtnMaker.style.width = "100px";
editBtnMaker.style.height = "50px";
editBtnMaker.innerHTML = "Edit";

let deleteBtnMaker = document.createElement("button");
deleteBtnMaker.style.width = "100px";
deleteBtnMaker.style.height = "50px";
deleteBtnMaker.innerHTML = "Delete";

// Show data
function showData () {
    for (let i = 0; i <= dataSubmit.length; i++) {
        if (dataSubmit.length != 0) {
            // Tạo order
            orderMaker.innerHTML = `${orderOutput+1}`;
            document.getElementById("result--order").appendChild(orderMaker);
            orderOutput++;

            // Tạo name
            nameMaker.value = dataSubmit.shift();
            document.getElementById("result--name").appendChild(nameMaker);

            // Tạo cate
            cateMaker.setAttribute("id", "mycateMaker");
            document.getElementById("result--cate").appendChild(cateMaker);
            
            for (let j = 0; j < cateArr.length; j++) {
                let option = document.createElement("option");
                option.setAttribute("value", cateArr[j]);
                option.text = cateArr[j];
                cateMaker.appendChild(option);
            };

            cateMaker.value = dataSubmit.shift();

            // Tạo image
            imageMaker.src = dataSubmit.shift();
            document.getElementById("result--image").appendChild(imageMaker);

            // Tạo nút
            document.getElementById("action--button").appendChild(editBtnMaker);
            document.getElementById("action--button").appendChild(deleteBtnMaker);
        }
    }
}

// Edit hàng

// Xóa hàng
// if (deleteBtnMaker) {
//     deleteBtnMaker.addEventListener("click", deleteRow);

//     function deleteRow() {
//         orderMaker.remove();
//         nameMaker.remove();
//         cateMaker.remove();
//         imageMaker.remove();
//         editBtnMaker.remove();
//         deleteBtnMaker.remove();
//         orderOutput--;
//     }
// }

function addToArray () {
    console.log (dataSubmit);
}

function sumF () {
    validate();
    submitElement.addEventListener("click", addToArray);
    submitElement.addEventListener("click", showData);
    // deleteRow();
}

sumF();