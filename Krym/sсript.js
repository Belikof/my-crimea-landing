document.addEventListener("DOMContentLoaded", function () {
    const infoSection = document.getElementById("info-section");
    const infoVideo = document.querySelector(".info-video");

    // Функция для запуска видео, когда второй сектор в зоне видимости
    function playVideoOnScroll() {
        const rect = infoSection.getBoundingClientRect();
        
        // Проверяем, когда второй сектор полностью входит в зону видимости
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            infoVideo.style.display = "block"; // Делаем видео видимым
            infoVideo.play(); // Запускаем видео
            window.removeEventListener("scroll", playVideoOnScroll); // Удаляем обработчик после запуска видео
        }
    }

    window.addEventListener("scroll", playVideoOnScroll);
});