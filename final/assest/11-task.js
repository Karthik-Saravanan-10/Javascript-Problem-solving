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
let Emailpattern = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
let Namepattern = /[a-zA-Z]$/;
let dataArray = [];
let count = 0;

form.addEventListener("input", (e) => {
    e.preventDefault();
    //addbtn[count].addEventListener("click", (e) => { e.preventDefault() });
    //1-console.log(dataArray);
    // console.log("hii",details[count].value.length >10)
    // console.log(details[count].value.length)
    if (!vskForm(count)) {
        addbtn[count].classList.remove("disabled");
        addbtn[count].setAttribute("onclick", "dynamicForm()");
        // name[count].setAttribute("value", name[count].value);
        // role[count].setAttribute("value", role[count].value);
        // email[count].setAttribute("value", email[count].value);
        // dob[count].setAttribute("value", dob[count].value);
        // age[count].setAttribute("value", age[count].value);
        // details[count].innerHTML = details[count].value;
        submitBtn.style.display = "block";
    }
})



form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!vskForm(count)) {
        dataPush(count);
        insertDataTable(dataArray);
        dataArray = [];
        form.reset();
        addbtn[count].classList.add("disabled");
        addbtn[count].removeAttribute("onclick", "dynamicForm()");
        let container = document.getElementsByClassName("input-container")[0];
        container.innerHTML = "";
        //1-console.log("hey");
        console.log(count);
        count = 0;
        console.log(count);
    } else {
        alert("Fill all form")
    }
})

function vskForm(count) {
    let kk = ((!name[count].value) || (!role[count].value) || (!email[count].value)||(!dob[count].value)||(!age[count].value)||
             ((!details[count].value)||(details[count].value.length < 10))||(!checkGender(count)));

    let vsk = ((name[count].value == "") || (name[count].value == undefined)) ||
        ((role[count].value == "")) ||
        ((email[count].value == "") || (email[count].value == undefined)) ||
        ((dob[count].value == "")) ||
        ((age[count].value == undefined)) ||
        ((details[count].value == "") || (details[count].value == undefined) || (details[count].value.length < 10)) ||
        ((checkGender(count) == "") || (checkGender(count) == undefined));

    return vsk;
}

function dateOfBirth(count) {
    let PresentDate = new Date();
    // console.log(PresentDate)
    let getdateData = new Date(dob[count].value.split("-"));
    let ageValue = PresentDate - getdateData;
    let yr = 1000 * 60 * 60 * 24 * 365;
    // console.log(ageValue/yr)
    let getAge = Math.floor(ageValue / yr);
    // console.log(getAge)
    if (getAge >= 0) {
        // dob[count].nextElementSibling.style.display="none";
        return getAge;
    } else {
        //1-console.log(dob[count].nextElementSibling)
        dob[count].nextElementSibling.style.display = "block";
        dob[count].nextElementSibling.innerHTML = "Don't Enter Future value";
    }
}

function mouseLeave() {
    age[count].value = dateOfBirth(count);
}

function dataPush(count) {
    dataArray.push(name[count].value);
    dataArray.push(role[count].value);
    dataArray.push(email[count].value);
    dataArray.push(dob[count].value);
    dataArray.push(age[count].value);
    dataArray.push(checkGender(count));
    dataArray.push(selectBox[count].value);
    dataArray.push(details[count].value);
}

function checkName(val) {
    if (val.value == "" || val.value == undefined) {
        val.nextElementSibling.style.display = "block";
        val.nextElementSibling.innerHTML = "Fill the Form";
    } else if (!(Namepattern.test(val.value))) {
        val.nextElementSibling.style.display = "block";
        val.nextElementSibling.innerHTML = "Use only Alphabets";
    }
    else {
        val.nextElementSibling.style.display = "none";
        val.nextElementSibling.innerHTML = "";
    }
    // console.log(Namepattern.test(val.value))
}

function checkRole(val) {
    if (val.value == "" || val.value == undefined) {
        val.nextElementSibling.style.display = "block";
        val.nextElementSibling.innerHTML = "Fill the Form";
    } else {
        val.nextElementSibling.style.display = "none";
        val.nextElementSibling.innerHTML = "";
    }
    // console.log(Namepattern.test(val.value))
}

function checkEmail(val) {
    if (val.value == "") {
        val.nextElementSibling.style.display = "block";
        val.nextElementSibling.innerHTML = "Fill the Form";
    }
    else if (!(Emailpattern.test(val.value))) {
        val.nextElementSibling.style.display = "block";
        val.nextElementSibling.innerHTML = "Invalid Pattern";
    }
    else {
        val.nextElementSibling.style.display = "none";
        val.nextElementSibling.innerHTML = "";
    }
}

function checkDetail(val) {
    if (val.value == "") {
        val.nextElementSibling.style.display = "block";
        val.nextElementSibling.innerHTML = "Fill the About Yourself";
    } else if (((val.value.length < 10) || (val.value.length > 200))) {
        val.nextElementSibling.style.display = "block";
        val.nextElementSibling.innerHTML = "should be more than 10 words and less than 200 words";
    }
    else {
        val.nextElementSibling.style.display = "none";
        val.nextElementSibling.innerHTML = "";
    }
    // console.log(details.value.length)
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
    //addbtn[count].style.display = "none";
    addbtn[count].classList.add("disabled");
    addbtn[count].removeAttribute("onclick", "dynamicForm()");
    dataPush(count);
    count = count + 1;
    let container = document.getElementsByClassName("input-container")[0];
    container.innerHTML += `
    <div class="container">
                <div class="colomn">
                    <div class="form-input">
                        <label for="name">Name</label>
                        <input type="text" id="name" class="name" placeholder="Name" oninput="checkName(this)">
                        <p class="indicator"></p>
                    </div>
    
                    <div class="form-input">
                        <label for="dob">DOB</label>
                        <input type="date" id="dob" class="dob" oninput="checkRole(this)" onchange="mouseLeave()">
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
                        <input type="text" id="role" class="role" placeholder="Role" oninput="checkRole(this)">
                        <p class="indicator"></p>
                    </div>
    
                    <div class="form-input">
                        <label for="age">Age</label>
                        <input type="number" id="age" class="age" placeholder="Age" oninput="checkRole(this)">
                        <p class="indicator"></p>
                    </div>
    
                    <div class="form-input radio-input">
                        <label>Gender</label>
                        <div class="radio">
                            <input type="radio" name="gender${count}" id="male" class="male" value="male">
                            <label for="male">Male</label>
                            <input type="radio" name="gender${count}" id="female" class="female" value="female">
                            <label for="female">Female</label><br>
                        </div>
                        <p class="indicator"></p>
                    </div>
                </div>
    
                <div class="colomn">
                    <div class="form-input">
                        <label for="email">Email</label>
                        <input type="text" placeholder="Email" class="email" id="email" oninput="checkEmail(this)">
                        <p class="indicator"></p>
                    </div>
    
                    <div class="form-input">
                        <label for="textarea">Write About Yourself</label>
                        <textarea name="" id="textarea" class="textarea" oninput="checkDetail(this)"></textarea>
                        <p class="indicator"></p>
                    </div>
                </div>
            </div>`;
}

function insertDataTable(array) {
    table.style.display = "table";
    let arr = array;
    for (let i = 0; i < arr.length; i++) {
        //1-console.log(array[i])
        if (i % 8 == 0) {
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