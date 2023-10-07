function submitForm() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let dob = document.getElementById("dob").value;
    let country = document.getElementById("country").value;
    let gender = document.querySelectorAll('input[type="checkbox"]:checked');
    let profession = document.getElementById("profession").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;

    if (firstName == "" || lastName == "" || dob == "" || country == "" || gender.length == 0 || profession == "" || email == "" || mobile == "") {
        alert("Please fill all the fields.");
        return;
    }  

    let message = "First Name: " + firstName + "\n" +
                  "Last Name: " + lastName + "\n" +
                  "Date of Birth: " + dob + "\n" +
                  "Country: " + country + "\n" +
                  "Gender: ";
    for (let i = 0; i < gender.length; i++) {
        message += gender[i].value + " ";
    }
    message += "\n" +
               "Profession: " + profession + "\n" +
               "Email: " + email + "\n" +
               "Mobile Number: " + mobile;
    alert(message);

    resetForm();
}

function resetForm() {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("country").value = "";
    let gender = document.querySelectorAll('input[type="checkbox"]');
    for (let i = 0; i < gender.length; i++) {
        gender[i].checked = false;
    }
    document.getElementById("profession").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mobile").value = "";
}