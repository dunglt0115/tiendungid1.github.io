let myForm = document.getElementById("myForm");
let nameInput = document.getElementById("nameInput");
let categoryInput = document.getElementById("categoryInput");
let imageInput = document.getElementById("previewImage");
let submitData = [];
let itemData;
let itemTR = document.getElementById("itemTR");
const number = /^[0-9]+$/;

function showPreview(event) {
    if (event.target.files.length > 0) {
        let src = URL.createObjectURL(event.target.files[0]);
        imageInput.src = src;
        imageInput.style.width = "120px";
        imageInput.style.height = "70px";
        imageInput.style.marginTop = "10px";
    }
}

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    create();
    read();
    myForm.reset();
});

function itemObj(nameInput, categoryInput, imageInput) {
    this.nameInput = nameInput;
    this.categoryInput = categoryInput;
    this.imageInput = imageInput;
}

function create() {
    let storage = JSON.parse(localStorage.getItem("submitData"));

    if (nameInput.value.trim() == "") {
        document.getElementById("nameError").style.display = "block";
        document.getElementById("nameError").innerHTML = "*Chưa nhập tên";
    } if (nameInput.value.trim().length > 10) {
        document.getElementById("nameError").style.display = "block";
        document.getElementById("nameError").innerHTML = "*Ít hơn 10 ký tự";
    } if (nameInput.value.charAt(0).match(number)) {
        document.getElementById("nameError").style.display = "block";
        document.getElementById("nameError").innerHTML = "*Tên không bắt đầu bằng số";
    } if (categoryInput.value == "") {
        document.getElementById("categoryError").style.display = "block";
        document.getElementById("categoryError").innerHTML = "*Chưa chọn category";
    } if (imageInput.src == "") {
        document.getElementById("imageError").style.display = "block";
        document.getElementById("imageError").innerHTML = "*Chưa upload ảnh";
    } else {
        document.getElementById("nameError").style.display = "none";
        document.getElementById("categoryError").style.display = "none";
        document.getElementById("imageError").style.display = "none";
        
        let newItem = new itemObj(nameInput.value.trim(), categoryInput.value, imageInput.src);
        
        if (storage == null) {
            submitData.push(newItem);
            localStorage.setItem("Item", JSON.stringify(submitData));
        } else {
            submitData = JSON.parse(localStorage.getItem("Item"));
            submitData.push(newItem);
            localStorage.setItem("Item", JSON.stringify(submitData));
        }
    }
}

function read() {
    itemTR.innerHTML = "";
    itemData = JSON.parse(localStorage.getItem("Item"));

    if (itemData != null) {
        while (itemTR.firstChild) {
            itemTR.firstChild.remove();
        }

        itemData.forEach((item, index) => {
            imageInput.src = item.imageInput;
            imageInput.style.width = "120px";
            imageInput.style.height = "70px";
            imageInput.style.marginTop = "10px";

            itemTR.innerHTML += `
            <tr>
                <td>${item.nameInput}</td>
                <td>${item.categoryInput}</td>
                <td><img src="${item.imageInput}" width="120px" height="70px"></td>
                <td>
                    <button class="edit--btn" onclick="edit(${index})">
                        <i class="fas fa-edit"></i>
                        <span>Edit</span>
                    </button>
                    <button class="delete--btn" onclick="del(${index})">
                        <i class="fas fa-trash-alt"></i>
                        <span>Delete</span>
                    </button>
                </td>
            </tr>
            `
        })
    }
}

function edit(indexEdit) {
    let itemDataForEdit = JSON.parse(localStorage.getItem("Item"));
    itemTR.innerHTML = "";

    itemDataForEdit.forEach((item, index) => {
        if (index == indexEdit) {
            itemTR.innerHTML += `
            <tr>
                <td>
                    <input id="newName" placeholder="${item.nameInput}">
                    <span id="newNameError"></span>
                </td>
                <td>
                    <select id="newCategory">
                        <option value="">-- Choose category --</option>
                        <option value="Category 1">Category 1</option>
                        <option value="Category 2">Category 2</option>
                        <option value="Category 3">Category 3</option>
                    </select>
                    <span id="newCategoryError"></span>
                </td>
                <td>
                    <img id="oldImage" src="${item.imageInput}" width="120px" height="70px">
                    <label class="image-btn" for="newImage" style="cursor: pointer;">
                        <i class="fas fa-upload"></i>
                        <span>Upload new image</span>
                    </label>
                    <input id="newImage" onchange="showNewPreview(event)" style="display: none;" accept="image/x-png,image/jpeg" type="file">
                    <img id="newPreviewImage"/>
                    <span id="newImageError"></span>
                </td>
                <td>
                    <button class="update--btn" onclick="update(${index})">
                        <i class="fas fa-edit"></i>
                        <span>Update</span>
                    </button>
                    <button class="cancel--btn" onclick="read()">
                        <i class="fas fa-ban"></i>
                        <span>Cancel</span>
                    </button>
                </td>
            </tr>
            `
        } else {
            itemTR.innerHTML += `
            <tr>
                <td>${item.nameInput}</td>
                <td>${item.categoryInput}</td>
                <td><img src="${item.imageInput}" width="120px" height="70px"></td>
                <td>
                    <button disabled class="edit--btn" onclick="edit(${index})">
                        <i class="fas fa-edit"></i>
                        <span>Edit</span>
                    </button>
                    <button disabled class="delete--btn" onclick="del(${index})">
                        <i class="fas fa-trash-alt"></i>
                        <span>Delete</span>
                    </button>
                </td>
            </tr>
            `
        }
    })
}

function showNewPreview(event) {
    document.getElementById("oldImage").style.display = "none";

    if (event.target.files.length > 0) {
        let newImage = document.getElementById("newPreviewImage");
        let src = URL.createObjectURL(event.target.files[0]);
        newImage.src = src;
        newImage.style.width = "120px";
        newImage.style.height = "70px";
        newImage.style.marginTop = "10px";
    }
}

function update(indexUpdate) {
    let itemDataForUpdate = JSON.parse(localStorage.getItem("Item"));

    itemDataForUpdate[indexUpdate].nameInput = document.getElementById("newName").value;
    itemDataForUpdate[indexUpdate].categoryInput = document.getElementById("newCategory").value;
    
    let newName = itemDataForUpdate[indexUpdate].nameInput;
    let newCategory = itemDataForUpdate[indexUpdate].categoryInput;
    
    if (newName.trim() == "") {
        document.getElementById("newNameError").style.display = "block";
        document.getElementById("newNameError").innerHTML = "*Chưa nhập tên";
    } if (newName.trim().length > 10) {
        document.getElementById("newNameError").style.display = "block";
        document.getElementById("newNameError").innerHTML = "*Ít hơn 10 ký tự";
    } if (newName.charAt(0).match(number)) {
        document.getElementById("newNameError").style.display = "block";
        document.getElementById("newNameError").innerHTML = "*Tên không bắt đầu bằng số";
    } if (newCategory == "") {
        document.getElementById("newCategoryError").style.display = "block";
        document.getElementById("newCategoryError").innerHTML = "*Chưa chọn category";
    } else {
        document.getElementById("newNameError").style.display = "none";
        document.getElementById("newCategoryError").style.display = "none";
        
        itemDataForUpdate[indexUpdate].imageInput = document.getElementById("newPreviewImage").src;
        
        if (itemDataForUpdate[indexUpdate].imageInput == "") {
            itemDataForUpdate[indexUpdate].imageInput = document.getElementById("oldImage").src;
        }

        localStorage.setItem("Item", JSON.stringify(itemDataForUpdate));
        read();
    }
}

function del(indexDelete) {
    let itemDataForDelete = JSON.parse(localStorage.getItem("Item"));
    itemDataForDelete.splice(indexDelete, 1);
    localStorage.setItem("Item", JSON.stringify(itemDataForDelete));
    read();
}