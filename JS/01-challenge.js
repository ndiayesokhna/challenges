let small = document.getElementById("erroned")
let input = document.getElementById("Email")
let strong = document.getElementById("email")
function icon() {
    let small = document.getElementById("erroned")
    let input = document.getElementById("Email")
    let emailRegExp = new RegExp(
        "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$", "g"
    );

    if (emailRegExp.test(input.value)) {
        event.preventDefault();
        document.getElementById("main").classList.add("d-none")
        document.getElementById("icon").classList.remove("d-none")
        strong.innerHTML = input.value
    }else{
        event.preventDefault();
        small.innerHTML = "Valid Email Required"
        document.getElementById("Email").classList.add("bg-danger-subtle")
    }
}
function Dismiss() {
    document.getElementById("icon").classList.add("d-none")
    document.getElementById("main").classList.remove("d-none")
    input.value = ""
    document.getElementById("Email").classList.remove("bg-danger-subtle")
    small.innerHTML = ""
}
