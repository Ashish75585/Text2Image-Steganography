const showpassword = document.querySelector("#password-field img");
const passwordField = document.querySelector("#password-field");

showpassword.addEventListener("click", () => {
    const src = showpassword.getAttribute("src");
    if(src === "assets/eye.svg"){
        showpassword.setAttribute("src", "assets/eye-off.svg");
        passwordField.setAttribute("type", "text");
    }
    else{
        showpassword.setAttribute("src", "assets/eye.svg");
        passwordField.setAttribute("type", "password");
    }
})

