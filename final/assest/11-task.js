let form = document.querySelector("form");
let table = document.querySelector("table");
let name = document.getElementsByClassName("name");
let email = document.getElementsByClassName("email");
let role = document.getElementsByClassName("role");
let addbtn = document.getElementsByClassName("addbtn");
let array = [];
let count = 0;

form.addEventListener("input", (e) => {
    e.preventDefault();
    addbtn[count].addEventListener("click", (e) => { e.preventDefault() });
    if (validation(count)) {
        addbtn[count].classList.remove("disabled");
        addbtn[count].setAttribute("onclick", "dynamicForm()");
        // array.push(name[count].value);
        // array.push(role[count].value);
        // array.push(email[count].value);
        name[count].setAttribute("value", name[count].value)
        role[count].setAttribute("value", role[count].value)
        email[count].setAttribute("value", email[count].value)
    }
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let out = document.querySelector(".output");
    let input = document.querySelectorAll("input");
    let isNull = false;
    for (let i = 0; i < ((count + 1) * 3); i++) {
        if (input[i].value == "") {
            isNull = true
        } else {
            isNull = false;
        }
    }
    if (!isNull) {
        alert("Completed");
        // addTableData();
        array.forEach((elem) => {
            out.innerHTML += `${elem}`
        })
    } else {
        alert("Fill Everything")
    }
})

function validation(count) {
    if ((name[count].value == "") || (email[count].value == "") || (role[count].value == "")) {
        return false
    } else {
        return true
    }
}

function dynamicForm() {
    array.push(name[count].value);
    array.push(role[count].value);
    array.push(email[count].value);
    console.log(array);
    addbtn[count].style.display = "none";
    count = count + 1;
    let container = document.getElementsByClassName("input-container")[0];
    container.innerHTML += `
    <div class="input">
                <label for="name">Name</label>
                <input type="text" id="name" class="name">
                <label for="role">Role</label>
                <input type="text" id="role" class="role">
                <label for="email">Email</label>
                <input type="email" id="email" class="email">
                <button type="button" class="addbtn disabled">Add</button>
            </div>`;
}

function addTableData() {
    let tr = table.insertRow[1];
    array.forEach((elem) => {
        tr.innerHTML += `${elem}`
    })
}