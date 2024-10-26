function openForm() {
    document.getElementById('popupForm').style.display = 'block';  // buka popup
    document.getElementById('popupOverlay').style.display = 'block'; // buka overlay
}

function closeForm() {
    document.getElementById('popupForm').style.display = 'none';  // tutup popup
    document.getElementById('popupOverlay').style.display = 'none'; // tutup overlay
}

document.addEventListener("DOMContentLoaded", function () {
    const newsItems = document.querySelectorAll(".news-item");

    newsItems.forEach((item, index) => {
        const readMoreBtn = item.querySelector(".read-more");
        const newsTitle = item.querySelector("h2").textContent;
        const newsImage = item.querySelector("img").src;
        const newsContent = item.querySelector("p").textContent;

        readMoreBtn.addEventListener("click", function () {
            const newsData = {
                title: newsTitle,
                image: newsImage,
                content: newsContent,
            };

            // Simpan data berita ke localStorage dengan kunci yang unik
            localStorage.setItem(`news${index}`, JSON.stringify(newsData));

            // Arahkan ke halaman berita lengkap dengan ID berita
            window.location.href = `newsDetails.html?id=news${index}`;
        });
    });
});

// popup search
function openForm3() {
    document.getElementById("searchForm").style.display = "block";
}
function closeForm3() {
    document.getElementById("searchForm").style.display = "none";
}