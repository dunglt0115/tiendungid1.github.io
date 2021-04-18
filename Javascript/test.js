// Khai báo mảng chứa kết quả trước khi vào local storage
let dataSubmit = [];

// Khai báo biến gọi tới element
let submitButton = document.getElementById("submit--item");
let nameInput = document.getElementById("name--item");
let cateInput = document.getElementById("cate-item");
let cateArr = ["-- Chọn pet --", "Mèo", "Chó", "Gà"];
let imagePreview = document.getElementById("preview--image");

// Validate & Preview ảnh
let loadFile = function(event) {
    imagePreview.src = URL.createObjectURL(event.target.files[0]);
}

submitButton.addEventListener("click", function() {
    let numbers = /^[0-9]+$/;

    if (nameInput.value.trim() == "" || nameInput.value.trim() == null) {
        document.querySelector(".name__error--message").style.display = "block";
        document.querySelector(".name__error--message").innerHTML = "*Chưa nhập kìa bạn";
    } else if (nameInput.value.length >= 10) {
        document.querySelector(".name__error--message").style.display = "block";
        document.querySelector(".name__error--message").innerHTML = "*Vui lòng nhập ít hơn 10 ký tự";
    } else if (nameInput.value.charAt(0).match(numbers)) {
        document.querySelector(".name__error--message").style.display = "block";
        document.querySelector(".name__error--message").innerHTML = "*Ký tự đầu tiên không thể là một số";
    } else {
        document.querySelector(".name__error--message").style.display = "none";
    }
})

submitButton.addEventListener("click", function() {
    if (cateInput.value === "") {
        document.querySelector(".cate__error--message").style.display = "block";
        document.querySelector(".cate__error--message").innerHTML = "*Chọn pet đi bạn";
    } else {
        document.querySelector(".cate__error--message").style.display = "none";
    }
})

// Thêm data vào object và push object vào mảng
function signUp() {
    this.name = "None";
    this.cate = "None";
    this.img = "None";
}

submitButton.addEventListener("click", function() {
    if (nameInput.value && cateInput.value && imagePreview.src) {
        let newUser = new signUp();
        
        newUser.name = nameInput.value;
        newUser.cate = cateInput.value;
        newUser.img = imagePreview.src;
        
        dataSubmit.push(newUser);
    }

    localStorage.setItem("user", JSON.stringify(dataSubmit));
})

// Show data
let orderIdArr = [];
let nameIdArr = [];
let cateIdArr = [];
let imageIdArr = [];
let editIdArr = [];
let deleteIdArr = [];

let testArr = [];

submitButton.addEventListener("click", function() {
    let userData = JSON.parse(localStorage.getItem("user"));
    
    // Show users
    let orderMaker = document.createElement("li");
    orderMaker.style.height = "50px";
    
    let nameMaker = document.createElement("input");
    nameMaker.style.height = "50px";
    
    let cateMaker = document.createElement("select");
    cateMaker.style.height = "50px";
    
    let imageMaker = document.createElement("img");
    imageMaker.style.width = "120px";
    imageMaker.style.height = "60px";
    
    let editBtnMaker = document.createElement("button");
    editBtnMaker.style.display = "block";
    editBtnMaker.style.width = "100px";
    editBtnMaker.style.height = "50px";
    editBtnMaker.innerHTML = "Edit";
    
    let deleteBtnMaker = document.createElement("button");
    deleteBtnMaker.style.display = "block";
    deleteBtnMaker.style.width = "100px";
    deleteBtnMaker.style.height = "50px";
    deleteBtnMaker.innerHTML = "Delete";

    let saveBtnMaker = document.createElement("button");
    saveBtnMaker.style.display = "block";
    saveBtnMaker.style.width = "100px";
    saveBtnMaker.style.height = "50px";
    saveBtnMaker.innerHTML = "Save";
    
    let cancelBtnMaker = document.createElement("button");
    cancelBtnMaker.style.display = "block";
    cancelBtnMaker.style.width = "100px";
    cancelBtnMaker.style.height = "50px";
    cancelBtnMaker.innerHTML = "Cancel";

    for (let i = 0; i < userData.length; i++) {
        // Tạo order
        orderMaker.innerHTML = i + 1;
        orderMaker.id = "test" + i;
        document.getElementById("result--order").appendChild(orderMaker);
        
        // Tạo name
        nameMaker.value = userData[i].name;
        nameMaker.id = "test" + i;
        nameMaker.readOnly = true;
        document.getElementById("result--name").appendChild(nameMaker);
        
        // Tạo cate
        for (let j = 0; j < cateArr.length; j++) {
            let option = document.createElement("option");
            option.setAttribute("value", cateArr[j]);
            option.text = cateArr[j];
            cateMaker.appendChild(option);
        }
        
        cateMaker.value = userData[i].cate;
        cateMaker.id = "test" + i;
        cateMaker.disabled = true;
        document.getElementById("result--cate").appendChild(cateMaker);
        
        // Tạo image
        imageMaker.src = userData[i].img;
        imageMaker.id = "test" + i;
        document.getElementById("result--image").appendChild(imageMaker);
        
        // Tạo nút
        document.getElementById("action--button").appendChild(editBtnMaker);
        editBtnMaker.id = "test" + i;

        document.getElementById("action--button").appendChild(deleteBtnMaker);
        deleteBtnMaker.id = "test" + i;
    }
    
    // orderIdArr.push(orderMaker.id);
    // nameIdArr.push(nameMaker.id);
    // cateIdArr.push(cateMaker.id);
    // imageIdArr.push(imageMaker.id);
    // editIdArr.push(editBtnMaker.id);
    // deleteIdArr.push(deleteBtnMaker.id);

    testArr.push(orderIdArr.id);

    // Xóa và edit
    deleteBtnMaker.addEventListener("click", function(event) {
        orderMaker.remove();
        nameMaker.remove();
        cateMaker.remove();
        imageMaker.remove();
        editBtnMaker.remove();
        deleteBtnMaker.remove();
    })

    // for (let i = 0; i < testArr.length; i++) {
    //     editBtnMaker.addEventListener("click", function(event) {
    //         let x = document.querySelectorAll(event.target.id);
    //         // console.log(document.getElementById("edit0"));
    //         console.log (x);

    //         editBtnMaker.style.display = "none";
    //         deleteBtnMaker.style.display = "none";
    //         document.getElementById("action--button").appendChild(saveBtnMaker);
    //         document.getElementById("action--button").appendChild(cancelBtnMaker);
    //         saveBtnMaker.style.display = "block";
    //         cancelBtnMaker.style.display = "block";

    //         console.log (event.target.id);

    //         if (cancelBtnMaker) {
    //             cancelBtnMaker.addEventListener("click", function() {
    //                 saveBtnMaker.style.display = "none";
    //                 cancelBtnMaker.style.display = "none";
    //                 editBtnMaker.style.display = "block";
    //                 deleteBtnMaker.style.display = "block";
    //                 nameMaker.readOnly = true;
    //                 cateMaker.disabled = true;
    //             })
    //         }

    //         nameMaker.readOnly = false;
    //         cateMaker.readOnly = false;
    //     })
    // }
})