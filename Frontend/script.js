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
// window.addEventListener("load", function () {
//     const apiURL = "https://localhost:7167/api/CRUD/read";
//     fetch(apiURL)
//     .then((response) => response.json())
//     .then(function (data) {
//     data.forEach((element) => {
//     let tr = document.createElement("tr");
//     let th = document.createElement("th");
//     let input = document.createElement("input");
//     input.type = "checkbox";
//     input.className = "form-check-input";
//     input.name='checkbox'
//     th.scope = "row";
//     th.appendChild(input);
//     let first_td = document.createElement("td");
//     first_td.innerText = element.name;
//     let second_td = document.createElement("td");
//     second_td.innerText = element.email;
//     second_td.name = 'Email';
//     let third_td = document.createElement("td")
//     third_td.innerText = element.address;
//     let fhourth_td = document.createElement("td")
//     fhourth_td.innerText = element.phoneNumber;
//     tr.appendChild(th);
//     tr.appendChild(first_td);
//     tr.appendChild(second_td);
//     tr.appendChild(third_td);
//     tr.appendChild(fhourth_td);
//     document.getElementById("tb").appendChild(tr);
//     });
//     })
//     })

window.onload = function () {
    fetch('https://localhost:7167/api/CRUD/read')
        .then((response) => response.json())
        .then((data) => {
            var userTable = document.getElementById('userTable');

            data.forEach((user) => {
                var row = userTable.insertRow(-1);
                var nameCell = row.insertCell(0);
                var emailCell = row.insertCell(1);
                var addressCell = row.insertCell(2);
                var phoneNumberCell = row.insertCell(3);
                var activeCell = row.insertCell(4);
                var operationCell = row.insertCell(5);

                nameCell.innerHTML = user.name;
                addressCell.innerHTML = user.address;
                emailCell.innerHTML = user.email;
                phoneNumberCell.innerHTML = user.phoneNumber;
                //activeCell.innerHTML = user.active;


                if (user.active==false) {
                    row.classList.add('inactive-row');
                    var enableButton = document.createElement('button');
                    enableButton.innerHTML = 'Enable';
                    enableButton.setAttribute('class', 'btn btn-success m-2');
                    enableButton.addEventListener('click', function () {
                        ApiEnableUser(user.email);
                    });
                    operationCell.appendChild(enableButton);
                } else {
                    var disableButton = document.createElement('button');
                    disableButton.innerHTML = 'Disable';
                    disableButton.setAttribute('class', 'btn btn-warning m-2');
                    disableButton.addEventListener('click', function () {
                        ApiDisableUser(user.email);
                    });
                    operationCell.appendChild(disableButton);
                }

                var deleteButton = document.createElement('button');
                deleteButton.innerHTML = 'Delete';
                deleteButton.setAttribute('class', 'btn btn-danger m-2');
                deleteButton.addEventListener('click', function () {
                    ApiDeleteUser(user.email);
                });

                operationCell.appendChild(deleteButton);
            });
        })
        .catch((error) => console.error('Error:', error));
};

    // End Of Users Management Page


// function Deactiving() {
//     let items = document.getElementsByTagName('tr');
//     let checkedEmails = [];
//     Array.from(items).forEach((row) => {
//         let checkbox = row.querySelector('input[type="checkbox"]');
//         if (checkbox.checked) {
//             let email = row.querySelector('td.email').textContent;
//             checkedEmails.push(email);
//         }
//     }); console.log( checkedEmails);
// }
    

function ApiEnableUser(email) {
    fetch(`https://localhost:7167/api/CRUD/avtive?email=${email}`, { method: 'PUT' }).then(
        (response) => {
            if (response.ok) {
                window.location.replace('./admin.html');
            } else {
                console.log('Failed to enable user');
            }
        }
    );
}
 

function ApiDisableUser(email) {
    fetch(`https://localhost:7167/api/CRUD/deavtive?email=${email}`, { method: 'PUT' }).then(
        (response) => {
            if (response.ok) {
                window.location.replace('./admin.html');
            } else {
                console.log('Failed to enable user');
            }
        }
    );
}
function ApiDeleteUser(email) {
    fetch(`https://localhost:7167/api/CRUD/delete?email=${email}`, { method: 'DELETE' }).then(
        (response) => {
            if (response.ok) {
                window.location.replace('./admin.html');
            } else {
                console.log('Failed to enable user');
            }
        }
    );
}
