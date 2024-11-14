let form = document.querySelector("form");
let name = document.getElementsByClassName("name");
let email = document.getElementsByClassName("email");
let role = document.getElementsByClassName("role");
let dob = document.getElementsByClassName("dob");
let age = document.getElementsByClassName("age");
let selectBox = document.getElementsByClassName("selectbox");
let gender = document.getElementsByClassName("male");
let gender2 = document.getElementsByClassName("female");
let addbtn = document.getElementsByClassName("addbtn");
let details = document.getElementsByClassName("textarea");
let submitBtn = document.getElementById("submit");
let table = document.querySelector("table");
let dataArray = [];
let count = 0;

form.addEventListener("input", (e) => {
    e.preventDefault();
    addbtn[count].addEventListener("click", (e) => { e.preventDefault() });
    console.log(dataArray);
    if (!vskForm(count)) {
        addbtn[count].classList.remove("disabled");
        addbtn[count].setAttribute("onclick", "dynamicForm()");
        name[count].setAttribute("value", name[count].value);
        role[count].setAttribute("value", role[count].value);
        email[count].setAttribute("value", email[count].value);
        dob[count].setAttribute("value", dob[count].value);
        age[count].setAttribute("value", age[count].value);
        details[count].innerHTML = details[count].value;
        dataArray.push(name[count].value);
        dataArray.push(role[count].value);
        dataArray.push(email[count].value);
        dataArray.push(dob[count].value);
        dataArray.push(age[count].value);
        dataArray.push(details[count].value);
        dataArray.push(selectBox[count].value);
        dataArray.push(checkGender(count));
        submitBtn.classList.remove("disabled");
    }
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    insertDataTable(dataArray);
    dataArray=[];
})

function vskForm(count) {
    let vsk = ((name[count].value == "") || (name[count].value == undefined)) ||
        ((role[count].value == "")) ||
        ((email[count].value == "") || (email[count].value == undefined)) ||
        ((dob[count].value == "")) ||
        ((age[count].value == undefined)) ||
        ((details[count].value == "") || (details[count].value == undefined)) ||
        ((checkGender(count) == "") || (checkGender(count) == undefined));

    return vsk;
}

function checkGender(count) {
    if (!((gender[count].checked == false) && (gender2[count].checked == false))) {
        if (gender[count].checked == true) {
            return gender[count].value
        } else {
            return gender2[count].value
        }
    }
}

function dynamicForm() {
    addbtn[count].style.display = "none";
    count = count + 1;
    let container = document.getElementsByClassName("input-container")[0];
    container.innerHTML += `
    <div class="container">
                <div class="colomn">
                    <div class="form-input">
                        <label for="name">Name</label>
                        <input type="text" id="name" class="name" placeholder="Name" >
                        <p class="indicator"></p>
                    </div>
    
                    <div class="form-input">
                        <label for="dob">DOB</label>
                        <input type="date" id="dob" class="dob">
                        <p class="indicator"></p>
                    </div>
    
                    <div class="form-input">
                        <label for="class">Class</label>
                        <select name="" id="selectbox" class="selectbox">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                    </div>

                    <div>
                        <button type="button" class="addbtn disabled">Add</button>
                    </div>
                </div>
    
                <div class="colomn">
                    <div class="form-input">
                        <label for="role">Role</label>
                        <input type="text" id="role" class="role" placeholder="Role">
                        <p class="indicator"></p>
                    </div>
    
                    <div class="form-input">
                        <label for="age">Age</label>
                        <input type="number" id="age" class="age" placeholder="Age">
                        <p class="indicator"></p>
                    </div>
    
                    <div class="form-input radio-input">
                        <label>Gender</label>
                        <div class="radio">
                            <input type="radio" name="gender" id="male" class="male" value="male">
                            <label for="male">Male</label>
                            <input type="radio" name="gender" id="female" class="female" value="female">
                            <label for="female">Female</label><br>
                        </div>
                        <p class="indicator"></p>
                    </div>
                </div>
    
                <div class="colomn">
                    <div class="form-input">
                        <label for="email">Email</label>
                        <input type="text" placeholder="Email" class="email" id="email">
                        <p class="indicator"></p>
                    </div>
    
                    <div class="form-input">
                        <label for="textarea">Write About Yourself</label>
                        <textarea name="" id="textarea" class="textarea"></textarea>
                        <p class="indicator"></p>
                    </div>
                </div>
            </div>`;
}

function insertDataTable(array) {
    let arr = array;
    for (let i = 0; i < arr.length; i++) {
        if (i % 9 == 0) {
            let tr = table.insertRow(1);
            tr.insertCell(0).innerHTML = `${array[i]}`;
            tr.insertCell(1).innerHTML = `${array[i + 1]}`;
            tr.insertCell(2).innerHTML = `${array[i + 2]}`;
            tr.insertCell(3).innerHTML = `${array[i + 3]}`;
            tr.insertCell(4).innerHTML = `${array[i + 4]}`;
            tr.insertCell(5).innerHTML = `${array[i + 5]}`;
            tr.insertCell(6).innerHTML = `${array[i + 6]}`;
            tr.insertCell(7).innerHTML = `${array[i + 7]}`;
        }
    }
}