const showpassword = document.querySelector("#password-field img");
const passwordInput = document.querySelector("#password-field input");

showpassword.addEventListener("click", () => {
    const src = showpassword.getAttribute("src");
    if (src === "assets/eye.svg"){
        showpassword.setAttribute("src", "assets/eye-off.svg");
        passwordInput.type = "text";
    } else {
        showpassword.setAttribute("src", "assets/eye.svg");
        passwordInput.type = "password";
    }
})

if (!WebAssembly.instantiateStreaming) {
    // polyfill
    WebAssembly.instantiateStreaming = async (resp, importObject) => {
        const source = await (await resp).arrayBuffer();
        return await WebAssembly.instantiate(source, importObject);
    };
}
const go = new Go();
const form = document.querySelector("form");
WebAssembly.instantiateStreaming(fetch("main.wasm"), go.importObject)
    .then(result => {
        go.run(result.instance);
        form.addEventListener("submit", () => {
            passwordInput.value = getLogic("encript", "Hello", "hi");
        })
    });
