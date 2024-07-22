document.addEventListener("DOMContentLoaded", function () {
    var tabHeaders = document.querySelectorAll(".tab-header");
    tabHeaders.forEach(function (header) {
        header.addEventListener("click", function () {
            var isActive = header.classList.contains("active");
            tabHeaders.forEach(function (hdr) {
                hdr.classList.remove("active");
                hdr.nextElementSibling.style.display = "none";
            });
            if (!isActive) {
                header.classList.add("active");
                header.nextElementSibling.style.display = "block";
            }
        });
    });
});
