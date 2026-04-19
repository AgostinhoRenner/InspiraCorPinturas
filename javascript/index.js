document.addEventListener("DOMContentLoaded", function () {
    const link = document.getElementById("instaLink");

    link.addEventListener("click", function(e) {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        const isMobile = /android|iphone|ipad|ipod/i.test(userAgent);

        if (isMobile) {
            e.preventDefault();

            window.location.href = "instagram://user?username=seuusuario";

            setTimeout(() => {
                window.location.href = "https://www.instagram.com/seuusuario";
            }, 1500);
        } else {
            link.setAttribute("target", "_blank");
        }
    });
});