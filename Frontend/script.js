//SignUp Page

function SignUp() {

const apiURL = "https://localhost:7167/api/Person/register";
const formData = new FormData(document.getElementById("registrationForm"));


fetch(apiURL, {

method : "POST",

body: formData,

})

.then(function (response)

{

if (response.ok) {

alert("You're Signed Up SuccessFully");

} else {

alert("Error With Sign You Up. ", response.status);

}

return response.json();

})

.then((data) => {

console.log("Success", data);

})

.catch((error) => {

console.log("Error on fetch", error);

})

}


// End Of SignUp Page


//SignIn Page

// function CallSignInAPI() {


// const apiURL = "https://localhost:7167/api/Person/login";

// const formData = new FormData(document.getElementById("signinForm"));


// fetch(apiURL, {

// method: "POST",

// body: formData,

// })
// .then(function (response) {

// if (response.ok) {

// alert("You're Loged In Successfully");

// } else {

// alert("Incorrect email or password");

// }

// return response.json();

// })

// .then((data) => {

// console.log("Success", data);

// })

// .catch((error) => {

// console.log("Error on fetch", error.message);

// })

// }

function SignIn() {

    const apiURL = "https://localhost:7167/api/Person/login";
    const formData = new FormData(document.getElementById("signinForm"));
    
    fetch(apiURL, {
    method: "POST",
    body: formData,
    })
    .then(function (response) {
    if (response.ok) {
        alert("You're Loged In Successfully");
        window.location.href="./admin.html"
    } else {
    alert("Incorrect email or password");
    }
    return response.json();
    })
    .then((data) => { 
    console.log("Success", data);
    })
    .catch((error) => {
    console.log("Error on fetch", error.message);
    })
    }
// End Of SignIn Page

// Users Management Page
window.addEventListener("load", function () {
    const apiURL = "https://localhost:7167/api/CRUD/read";
    fetch(apiURL)
    .then((response) => response.json())
    .then(function (data) {
    data.forEach((element) => {
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    let input = document.createElement("input");
    input.className = "form-check-input";
    th.scope = "row";
    th.appendChild(input);
    let first_td = document.createElement("td");
    first_td.innerText = element.name;
    let second_td = document.createElement("td");
    second_td.innerText = element.email;
    let third_td = document.createElement("td")
    third_td.innerText = element.address;
    let fhourth_td = document.createElement("td")
    fhourth_td.innerText = element.phoneNumber;
    tr.appendChild(th);
    tr.appendChild(first_td);
    tr.appendChild(second_td);
    tr.appendChild(third_td);
    tr.appendChild(fhourth_td);
    document.getElementById("tb").appendChild(tr);
    });
    })
    })
    // End Of Users Management Page
    
    