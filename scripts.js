// 控制選單滑動
function toggleMenu() {
		const menu = document.getElementById("menu");
		menu.classList.toggle("open");
}
		
// 照片輪播
let currentIndex = 0;

function moveSlide(direction) {
		const slides = document.querySelectorAll('.carousel-slide');
		const indicators = document.querySelectorAll('.indicator');
		currentIndex = (currentIndex + direction + slides.length) % slides.length;

		document.querySelector('.carousel-container').style.transform = translateX(-${currentIndex * 100}%);

		indicators.forEach((indicator, index) => {
				indicator.classList.toggle('active', index === currentIndex);
		});
}

document.querySelectorAll('.indicator').forEach((indicator, index) => {
		indicator.addEventListener('click', () => {
				moveSlide(index - currentIndex);
		});
});
// 自動輪播
setInterval(() => moveSlide(1), 5000);  

// 台大背景區進入淡入效果
document.addEventListener("scroll", () => {
    const ntuSection = document.querySelector(".ntu-background");
    const textOverlay = ntuSection.querySelector(".text-overlay h1");
    const rect = ntuSection.getBoundingClientRect();

    if (rect.top <= window.innerHeight * 0.8) {
        textOverlay.classList.add("fade-in");
    }
});

// 最新消息滑動效果
let currentNewsIndex = 0;

function moveNews(direction) {
    const newsItems = document.querySelectorAll(".news-item");
    const progress = document.querySelector(".progress-bar .progress");

    currentNewsIndex = (currentNewsIndex + direction + newsItems.length) % newsItems.length;

    newsItems.forEach((item, index) => {
        item.style.transform = `translateX(${(index - currentNewsIndex) * 100}%)`;
    });

    progress.style.width = `${((currentNewsIndex + 1) / newsItems.length) * 100}%`;
}
