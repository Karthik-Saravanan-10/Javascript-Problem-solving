let form = document.querySelector("form");
let userName = document.getElementById("name");
let role = document.getElementById("role");
let email = document.getElementById("email");
let dob = document.getElementById("dob");
let gender = document.getElementById("gender");
let selectBox = document.getElementById("selectbox");
let details = document.querySelector("textarea");
let age = document.getElementById("age");
const array=[];
let count=0;

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

function checkDetail() {
    if (details.value == "") {
        showErr(details);
    } else if ((details.value.length > 10) && (details.value.length < 200)) {
        showOut(details);
        alert("should be more than 10 words and less than 200 words")
    }
    else {
        showOut(details);
    }

    return details.value
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

//form insert
function insertData() {
    let table = document.querySelector("table");
    let tr = table.insertRow(1);
    let cell1 = tr.insertCell(0);
    let cell2 = tr.insertCell(1);
    let cell3 = tr.insertCell(2);
    let cell4 = tr.insertCell(3);
    let cell5 = tr.insertCell(4);
    let cell6 = tr.insertCell(5);
    let cell7 = tr.insertCell(6);
    let cell8 = tr.insertCell(7);

    cell1.innerHTML = checkName();
    cell2.innerHTML = checkRole();
    cell3.innerHTML =checkEmail();
    cell4.innerHTML = checkDob();
    cell5.innerHTML = dateOfBirth();
    cell6.innerHTML = gender.value;
    cell7.innerHTML = selectBox.value;
    cell8.innerHTML = checkDetail();
}



//form valid

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
        case "textarea":
            checkDetail();
            break;
        default:
            console.log(e.target.id)
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let formVali=(checkName()=="")&&(checkRole()=="")&&(checkEmail()=="")&&(checkDob()=="")&&(checkDetail()=="");
    let formValid=(checkName()=="")||(checkRole()=="")||(checkEmail()=="")||(checkDob()=="")||(checkDetail()=="");
    if(!formValid){
        insertData();
        insertElementArray();
        form.reset();
        console.log("inn",array)
    }else{
        alert("Fill the All Fields")
    }
    console.log("out",array)
})

function insertElementArray(){
    let arrName = checkName();
    let arrRole = checkRole();
    let arrmail =checkEmail();
    let arrdob = checkDob();
    let arrage = dateOfBirth();
    let arrgender = gender.value;
    let arrclass = selectBox.value;
    let arrdetail = checkDetail();

    array[count]=[arrName,arrRole,arrmail,arrdob,arrage,arrgender,arrclass,arrdetail];

    console.log("Before",count,array[count])

    count=count+1;

    console.log("After",count)
}