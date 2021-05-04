window.onload = function() {
    myForm = document.getElementById("myForm");
    dynamic = document.getElementById("dynamic");
    number = /^[0-9]+$/;
    userOrder = 0;

    // Preview ảnh
    loadFile = function(event) {
        let output = document.getElementById("previewImage");
        output.src = URL.createObjectURL(event.target.files[0]);
        output.style.width = "120px";
        output.style.height = "60px";
    }
        
    myForm.addEventListener("submit", function(e) {
        e.preventDefault();
        
        userName = document.getElementById("userName").value;
        userSkill = document.getElementById("userSkill").value;
        userAvatar = document.getElementById("previewImage").src;

        // Validate
        if (userName.trim() == "") {
            document.getElementById("nameError").style.display = "block";
            document.getElementById("nameError").innerHTML = "*Chưa nhập tên";
        } if (userName.trim().length > 10) {
            document.getElementById("nameError").style.display = "block";
            document.getElementById("nameError").innerHTML = "*Ít hơn 10 ký tự";
        } if (userName.charAt(0).match(number)) {
            document.getElementById("nameError").style.display = "block";
            document.getElementById("nameError").innerHTML = "*Tên không bắt đầu bằng số";
        } if (userSkill == "") {
            document.getElementById("skillError").style.display = "block";
            document.getElementById("skillError").innerHTML = "*Chưa chọn skill";
        } if (userAvatar == "") {
            document.getElementById("imgError").style.display = "block";
            document.getElementById("imgError").innerHTML = "*Chưa upload ảnh";
        } else {
            document.getElementById("nameError").style.display = "none";
            document.getElementById("skillError").style.display = "none";
            document.getElementById("imgError").style.display = "none";

            userOrder++;
            userName = userName.trim();

            let user = new User(userOrder, userName, userSkill, userAvatar);

            UI.displayData(user);
            Store.setStored(user);
        }
    })

    dynamic.addEventListener("click", function(e) {
        if (e.target.classList.contains("removeIt")) {
            UI.removeRow(e.target);
        }
    })

    dynamic.addEventListener("click", function(e) {
        if (e.target.classList.contains("editIt")) {
            UI.editRow(e.target);
        }
    })

    // Tạo object user
    class User {
        constructor(userOrder, userName, userSkill, userAvatar) {
            this.userOrder = userOrder;
            this.userName = userName;
            this.userSkill = userSkill;
            this.userAvatar = userAvatar;
        }
    }

    // Tạo row, xóa row
    class UI {
        static displayData(user) {
            let users = Store.getStored();
            users.push(user);
            UI.newRow(users);
        }

        static newRow(users) {
            let previewWhenLoad = document.getElementById("previewImage");

            while (dynamic.firstChild) {
                dynamic.firstChild.remove();
            }

            users.forEach(onebyone => {
                previewWhenLoad.src = onebyone.userAvatar;
                previewWhenLoad.style.width = "120px";
                previewWhenLoad.style.height = "60px";

                dynamic.innerHTML += `
                <tr id="${onebyone.userOrder}">
                    <td class="child">${onebyone.userOrder}</td>
                    <td><input class="child" readonly value="${onebyone.userName}"></td>
                    <td>
                        <select class="child" disabled>
                            <option value="${onebyone.userSkill}">${onebyone.userSkill}</option>              
                        </select>
                    </td>
                    <td class="child"><img class="child" src="${onebyone.userAvatar}" width="120px" height="60px"></td>
                    <td>
                        <button class="edit--btn editIt">Edit</button>
                        <button class="delete--btn removeIt">Delete</button>
                    </td>
                </tr>
                `
            })
        }

        static removeRow(element) {
            if (element.classList.contains("removeIt")) {
                let userOrder = element.parentElement.parentElement.firstElementChild.innerText;
                Store.removeFromLocal(userOrder);
                element.parentElement.parentElement.remove();
            }
        }

        static editRow(element) {            
            if (element.classList.contains("editIt")) {
                let activeId = document.getElementById(element.parentElement.parentElement.id);
                let parent = activeId;
                let child = parent.querySelectorAll(".child");

                // Lưu giá trị gốc
                let inputOrigin = child[1].value;
                let optOrigin = child[2].firstElementChild.value;
                let srcOrigin = child[4].src;

                // Ẩn nút
                let actionRow = element.parentElement;
                actionRow.firstElementChild.style.display = "none";
                actionRow.lastElementChild.style.display = "none";

                // Cấp quyền sửa tên, skill, ảnh
                child[1].removeAttribute("readonly");
                child[2].removeAttribute("disabled");
                child[2].firstElementChild.remove();

                let optEdit1 = document.createElement("option");
                optEdit1.value = "Skill 1";
                optEdit1.text = "Skill 1";
                let optEdit2 = document.createElement("option");
                optEdit2.value = "Skill 2";
                optEdit2.text = "Skill 2";
                let optEdit3 = document.createElement("option");
                optEdit3.value = "Skill 3";
                optEdit3.text = "Skill 3";

                child[2].add(optEdit1);
                child[2].add(optEdit2);
                child[2].add(optEdit3);

                // Tạo nút
                let editImgBtn = document.createElement("input");
                editImgBtn.type = "file";
                editImgBtn.id = "editAvatar";
                editImgBtn.accept = "image/x-png,image/jpeg";
                child[3].appendChild(editImgBtn);
                
                actionRow.innerHTML = `
                    <button class="update--btn updateIt">Update</button>
                    <button class="cancel--btn cancelIt">Cancel</button>
                `
                
                // Nút edit
                dynamic.addEventListener("click", function(e) {
                    if (e.target.classList.contains("updateIt")) {
                        
                    }
                })
                
                // Nút cancel
                dynamic.addEventListener("click", function(e) {
                    if (e.target.classList.contains("cancelIt")) {
                        child[1].value = inputOrigin;
                        child[1].setAttribute("readonly", true);

                        child[2].firstElementChild.remove();
                        child[2].firstElementChild.remove();
                        child[2].firstElementChild.remove();
                        let optRestore = document.createElement("option");
                        optRestore.value = optOrigin;
                        optRestore.text = optOrigin;
                        child[2].add(optRestore);
                        child[2].setAttribute("disabled", true);

                        child[3].removeChild(editImgBtn);
                        
                        child[4].src = srcOrigin;
                        
                        actionRow.firstElementChild.style.display = "none";
                        actionRow.lastElementChild.style.display = "none";
                        actionRow.innerHTML = `
                            <button class="edit--btn editIt">Edit</button>
                            <button class="delete--btn removeIt">Delete</button>
                        `
                    }
                })
                
            }
        }
    }

    /**
     * Xóa:
     * Function sẽ nhận vào một đối số là userOrder
     * 1. Lấy tất cả item trong localstorage
     * 2. Lặp qua tất cả các item với foreach, với đối số là obj và index
     * - Với mỗi vòng lặp, kiểm tra xem key userOrder có bằng đối số userOrder hay không
     * - Nếu bằng thì splice item đó
     * 3. Set lại user item trong local
     * 4. Khi bấm nút delete, chọn vào userOrder
     * 5. Gọi đến hàm xóa và truyền tham số userOrder vào hàm
     * 6. Việc xóa đc thực thi
     * 
     * Edit:
     * 1. Tạo 1 function nhận vào đối số là các giá trị edit (order, name, skill, avatar)
     * 2. Lấy tất cả item trong localstorage
     * 3. Foreach, đối số giống như xóa:
     * - Với mỗi vòng lặp, kiểm tra tương tự xóa
     * - Nếu bằng, thì dùng splice xóa và thêm một object mới với các giá trị là editorder, editname,
     * editskill và editavatar
     * 4. Set lại user item trong localstorage
     * 5. Khi bấm edit, chọn vào userorder
     * - Tạo 2 nút mới là save và canncel
     * - Cho sửa lại name, skill và hình
     * - Khi bấm save thì gọi đến hàm edit, truyền 4 tham số vào hàm
     * - Khi bấm cancel thì về lại như lúc đầu
     * 6. Việc update được thực thi 
    */
   
    // Localstorage
    class Store {
        static getStored() {
            let users = ``;

            if (localStorage.getItem("user") == null) {
                users = [];
            } else {
                users = JSON.parse(localStorage.getItem("user"));
            }

            return users;
        }

        static setStored(obj) {
            let usersFromLocal = Store.getStored();
            usersFromLocal.push(obj);
            localStorage.setItem("user", JSON.stringify(usersFromLocal));
        }

        static removeFromLocal(userOrder) {
            let allUsers = Store.getStored();

            allUsers.forEach(function(onebyone, index) {
                if (onebyone.userOrder == userOrder) {
                    allUsers.splice(index, 1);
                }
            })

            localStorage.setItem("user", JSON.stringify(allUsers));
        }

        static updateFromLocal(userOrder) {
            let allUsers = Store.getStored();

            allUsers.forEach(function(onebyone, index) {
                if (onebyone.userOrder == userOrder) {
                    allUsers.splice(index, 1);
                }
            })

            localStorage.setItem("user", JSON.stringify(allUsers));
        }
    }

    // Reload không mất data
    UI.newRow(Store.getStored());
}