function add() {
const email = document.querySelector('#email');
const pswd = document.querySelector('#pswd');
const select = document.getElementById('select-user');
const error = document.getElementById('error');

let selected_user = select.value;

    if (selected_user === "Admin") {
        if(email.value === "admin@gmail.com" && pswd.value === "admin"){
            window.location.href = "/admin.html";
        }
        else{
            error.innerHTML = "Email or Password is Wrong";
        }
    }
    else if (selected_user === "Manager") {
        if(email.value === "manager@gmail.com" && pswd.value === "manager"){
            window.location.href = "/manager.html";
        }
        else{
            error.innerHTML = "Email or Password is Wrong";
        }
    }
    else if (selected_user === "Faculty") {
        if(email.value === "faculty@gmail.com" && pswd.value === "faculty"){
            window.location.href = "/Faculty.html";
        }
        else{
            error.innerHTML = "Email or Password is Wrong";
        }
    }
    else {
        document.write("something went wrong");
    }
}