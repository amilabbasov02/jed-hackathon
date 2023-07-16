let userInput = document.getElementById(userName)

userName.addEventListener("keypress", function(e){
    var s = new RegExp("^[a-zA-Z_ф-яФ-я_a-əA-ə_^\S. *$]+$"),
        a = String.fromCharCode(e.charCode ? e.charCode : e.which);
    return !!s.test(a) || (e.preventDefault(), !1);
})

let btn = document.getElementById("form")
btn.addEventListener("submit", async function data(e) {
    e.preventDefault()
    let userName = document.getElementById("userName").value
    let password = document.getElementById("password").value
    try {
        const response = await axios.get('http://localhost:3000/logIn');
        const data = response.data;
        const existingNames = response.data.map(scripts => scripts.name);
        const existingPass = response.data.map(scripts => scripts.password);
        if (existingNames.includes(userName)) {
            if (existingPass.includes(password)) {
                window.location.href = "./index.html";
            }else{
                alert("username yada password sehfdir");                
            }
        } else {
            alert("username yada password sehfdir");
        }
    } catch (err) {
        console.log(`Hata`)
    }
})