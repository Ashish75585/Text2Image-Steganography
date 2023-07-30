const showpassword = document.querySelector("#img1");
const passwordField = document.querySelector("#passwordfield");

showpassword.addEventListener("click", handleClick);

function handleClick(){
    const type1 = showpassword.getAttribute("src");
    if(type1 === "view.png"){
        showpassword.setAttribute("src", "hide.png");
        passwordField.setAttribute("type", "text");
    }
    else{
        showpassword.setAttribute("src", "view.png");
        passwordField.setAttribute("type", "password");
    }
}
    