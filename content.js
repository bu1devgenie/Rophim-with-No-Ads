(function () {
    function handleAds() {
        document.querySelectorAll(
            ".sspp-area, .display-single, .sspp-modal, .popup, .popup-ad, .ad-popup, .modal.show, .overlay, .ad-overlay"
        ).forEach(el => {
            el.remove();
            console.log("Ad removed:", el);
        });

        document.body.style.overflow = "";
        document.body.style.pointerEvents = "";
        document.body.style.filter = "";

        document.querySelectorAll("main, #main, .main").forEach(mainEl => {
            mainEl.style.filter = "";
            mainEl.style.pointerEvents = "";
        });

        document.querySelectorAll("iframe").forEach(iframe => {
            const src = iframe.src || "";
            if (src.match(/ad|qc|banner|vpromolink/)) {
                iframe.remove();
                console.log("Ad iframe removed:", src);
            }
        });

        document.querySelectorAll("video").forEach(video => {
            if (video.duration && !isNaN(video.duration)) {
                if (video.duration <= 90) {
                    video.currentTime = video.duration;
                    video.pause();
                    console.log("Ad video skipped:", video.duration, "seconds");
                } else if (video.currentTime < 5) {
                    video.currentTime = 5;
                    console.log("Intro skipped");
                }
            }
        });

        document.querySelectorAll("button, div, span, a").forEach(el => {
            const text = el.innerText?.trim();
            if (text && (text === "Bỏ qua" || text.startsWith("Bỏ qua sau"))) {
                el.click();
                console.log("Skip ad button clicked:", text);
            }
        });
    }

    document.addEventListener("DOMContentLoaded", handleAds);

    function initObserver() {
        if (document.body) {
            const observer = new MutationObserver(handleAds);
            observer.observe(document.body, { childList: true, subtree: true });
            console.log("MutationObserver started");
        } else {
            setTimeout(initObserver, 100);
        }
    }
    initObserver();

    setInterval(handleAds, 500);
})();
