let searchInput = document.getElementById('searchInput');
let searchBtn = document.getElementById('searchBtn');
let resultsContainer = document.getElementById('resultsContainer');
let url = 'http://localhost:3000/scriptsCarts';

searchBtn.addEventListener('click', async function search() {
    let searchTerm = searchInput.value.trim(); // Arama terimini al ve baştaki ve sondaki boşlukları kaldır

    try {
        const response = await axios.get(`${url}?title_like=${searchTerm}`);
        const data = response.data;
        console.log(data);
        let resultItem = document.getElementById("resultsContainer")
        // Arama sonuçlarını temizle

        if (data.length === 0) {
            resultsContainer.innerHTML = 'Sonuç bulunamadı.';
        } else {
            data.forEach(item => {
                resultItem.innerHTML += `        <div class="comment-card">
                <a href="">
                <p class="comment-user-name">${item.title}</p>
                <p class="comment-course-name">${item.teachName}</p>
                <p class="comment-txt">${item.description}</p>
            </a>
            </div>`;
            });
        }
    } catch (err) {
        console.log('Hata:', err);
    }
});
