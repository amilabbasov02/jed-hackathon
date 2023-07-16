let id = 0;
let userInput = document.getElementById(userName)

userName.addEventListener("keypress", function(e){
    var s = new RegExp("^[a-zA-Z_ф-яФ-я_a-əA-ə_^\S. *$]+$"),
        a = String.fromCharCode(e.charCode ? e.charCode : e.which);
    return !!s.test(a) || (e.preventDefault(), !1);
})
async function getData() {
    try {
        const response = await axios.get('http://localhost:3000/logIn');
        const data = response.data;
        id = data.length + 1;
    } catch (err) {
        console.log('Hata:', err);
    }
}

getData();

let regBtn = document.getElementById('form');
let url = 'http://localhost:3000/logIn';

regBtn.addEventListener('submit', async function post(e) {
    e.preventDefault();

    let userName = document.getElementById('userName').value;
    let userEmail = document.getElementById('userEmail').value;
    let userPassword = document.getElementById('password').value;
    let userPassword2 = document.getElementById('password2').value;

    const existingData = await axios.get(url);
    const existingNames = existingData.data.map(scripts => scripts.name);
    const existingEmails = existingData.data.map(scripts => scripts.email);

    const data = {
        id: id,
        name: userName,
        email: userEmail,
        password: userPassword
    };

    if (userName !== '' && userEmail !== '' && userPassword !== '' && userPassword2 !== '') {
        if (userPassword === userPassword2) {
            if (existingNames.includes(userName)) {
                alert('bu ad var basqasini yoxla');
            } else if(existingEmails.includes(userEmail)) {
                alert("email istifade olunub")
            }else{
                id++;
                console.log(data.id);
                axios
                    .post(url, data)
                    .then(response => {
                        console.log('İstek başarılı. Sunucudan dönen veri:', response.data);
                        document.getElementById('userName').value = '';
                        document.getElementById('userEmail').value = '';
                        document.getElementById('password').value = '';
                        document.getElementById('password2').value = '';
                        window.location.href = "./login-have.html";
                    })
                    .catch(error => {
                        console.error('İstek sırasında bir hata oluştu:', error);
                    });
            }
        } else {
            alert('Parollar uygun değil.');
        }
    } else {
        alert('Boş qoymusuz');
    }
});
