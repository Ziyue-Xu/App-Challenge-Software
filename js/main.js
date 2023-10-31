
var document = document 
//for css
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
    item.addEventListener("click", function() {
        this.classList.toggle("collapsible--expanded");
    })
);


let createAcct = '<a class="nav__item" href="/pages/createAccount.html">Create Account</a>';
document.getElementById("label_fiodjsf").innerHTML = createAcct;

function changeState() {
    createAcct = '<a href="login.html">Login</a>';
    document.getElementById("label_fiodjsf").innerHTML = createAcct;
    console.log("in");
}


//document.getElementById("label_fiodjsf").innerText = createAcct;


