let form = document.querySelector("form");
let buttonValue = document.querySelector(".btnValid");
let addFormbtn = document.querySelector(".addForm button");
let userName = document.getElementById("name");
let role = document.getElementById("role");
let email = document.getElementById("email");
let dob = document.querySelector("#dob");
let age = document.getElementById("age");
let array=[];

form.addEventListener("input", (e) => {
    e.preventDefault();
    console.log(e.target)
    switch (e.target.id) {
        case "name":
            checkName();
            break;
        case "role":
            checkRole();
            break;
        case "email":
            checkEmail();
            break;
        case "dob":
            checkDob();
            break;
        default:
            console.log("nothing")
    }

    let formVali=(checkName()=="")&&(checkRole()=="")&&(checkEmail()=="")&&(checkDob()=="");
    let formValid=(checkName()=="")||(checkRole()=="")||(checkEmail()=="")||(checkDob()=="");
    if(!formValid){
        addFormbutton();
    }
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let formVali=(checkName()=="")&&(checkRole()=="")&&(checkEmail()=="")&&(checkDob()=="");
    let formValid=(checkName()=="")||(checkRole()=="")||(checkEmail()=="")||(checkDob()=="");
    if(!formValid){
        array[count];
        form.reset();
        console.log("inn");
    }else{
        alert("Fill the All Fields")
    }
})

function checkName() {
    if (userName.value == "") {
        showErr(userName);
    } else {
        showOut(userName);
    }

    return userName.value
}

function checkRole() {
    if (role.value == "") {
        showErr(role);
    } else {
        showOut(role);
    }

    return role.value
}

function checkEmail() {
    if (email.value == "") {
        showErr(email);
    } else {
        showOut(email);
    }

    return email.value
}

function checkDob() {
    if (dob.value == "") {
        showErr(dob);
    } else {
        showOut(dob);
    }

    return dob.value
}

function showErr(input) {
    let formInput = input;
    formInput.classList.add("error");
    formInput.classList.remove("show");
}

function showOut(input) {
    let formInput = input;
    formInput.classList.remove("error");
    formInput.classList.add("show");
}

function addFormbutton() {
    addFormbtn.classList.remove("disabled");
    addFormbtn.setAttribute("onclick", "onAddclick()");
}

//DOB Validation

function dateOfBirth() {
    let PresentDate = new Date();
    let getdateData = new Date(dob.value.split("-"));
    let ageValue = PresentDate - getdateData;
    let yr = 1000 * 60 * 60 * 24 * 365;
    // console.log(ageValue/yr)
    let getAge = Math.floor(ageValue / yr);
    // console.log(getAge)
    if (getAge >= 0) {
        return getAge;
    } else {
        alert("Enter Correct Date Of Birth");
        form.reset();
    }
}

function mouseLeave() {
    age.value = dateOfBirth();
}

//dynamic form add
function onAddclick() {
    let addDivContainer = document.querySelector(".addDivContainer");
    let dynamicDiv = document.createElement("div");
    dynamicDiv.setAttribute("class", "container");
    addDivContainer.appendChild(dynamicDiv);
    dynamicDiv.innerHTML = `
                <div class="form-input">
                <label for="name">Name</label>
                <input type="text" id="name" placeholder="Name" required>
            </div>
            <div class="form-input">
                <label for="role">Role</label>
                <input type="text" id="role" placeholder="Role" required>
            </div>
            <div class="form-input">
                <label for="dob">DOB</label>
                <input type="date" id="dob" onchange="mouseLeave()">
            </div>
            <div class="form-input">
                <label for="age">Age</label>
                <input type="number" id="age" placeholder="Age" readonly>
            </div>
            <div class="form-input">
                <label for="email">Email</label>
                <input type="email" placeholder="Email" id="email">
            </div>  
            <div class="addForm">
                <button type="button" class="disabled">+</button>
            </div>
        `;
}

function add() {
    let addDivContainer = document.querySelector(".addDivContainer");
    let formAddBtnDiv = document.createElement("div");
    let formAddBtn = document.createElement("button");
    formAddBtn.innerHTML = "+";
    formAddBtnDiv.appendChild(formAddBtn);
    addDivContainer.appendChild(formAddBtnDiv);
    formAddBtn.setAttribute("onclick", "onAddclick()");
}
