(function ($) {
    "use strict";

    // Products Slick
    $(".products-slick").each(function () {
        var $this = $(this),
            $nav = $this.attr("data-nav");

        $this.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            infinite: true,
            loop: true,
            speed: 300,
            dots: false,
            arrows: true,
            appendArrows: $nav ? $nav : $nav,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        });
    });

    // // Products Widget Slick
    // $(".products-widget-slick").each(function () {
    //     var $this = $(this),
    //         $nav = $this.attr("data-nav-2");

    //     $this.slick({
    //         infinite: true,
    //         autoplay: true,
    //         speed: 300,
    //         dots: false,
    //         arrows: true,
    //         appendArrows: $nav ? $nav : false,
    //     });
    // });

    // /////////////////////////////////////////

    // // Product Main img Slick
    // $("#product-main-img").slick({
    //     infinite: true,
    //     speed: 300,
    //     dots: false,
    //     arrows: true,
    //     fade: true,
    //     asNavFor: "#product-imgs",
    // });

    // // Product imgs Slick
    // $("#product-imgs").slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     arrows: true,
    //     centerMode: true,
    //     focusOnSelect: true,
    //     centerPadding: 0,
    //     vertical: true,
    //     asNavFor: "#product-main-img",
    //     responsive: [
    //         {
    //             breakpoint: 991,
    //             settings: {
    //                 vertical: false,
    //                 arrows: false,
    //                 dots: true,
    //             },
    //         },
    //     ],
    // });

    // // Product img zoom
    // var zoomMainProduct = document.getElementById("product-main-img");
    // if (zoomMainProduct) {
    //     $("#product-main-img .product-preview").zoom();
    // }

    // /////////////////////////////////////////

    // // Input number
    // $(".input-number").each(function () {
    //     var $this = $(this),
    //         $input = $this.find('input[type="number"]'),
    //         up = $this.find(".qty-up"),
    //         down = $this.find(".qty-down");

    //     down.on("click", function () {
    //         var value = parseInt($input.val()) - 1;
    //         value = value < 1 ? 1 : value;
    //         value = value > 9999.0 ? 9999.0 : value;
    //         $input.val(value);
    //         $input.change();
    //         updatePriceSlider($this, value);
    //     });

    //     up.on("click", function () {
    //         var value = parseInt($input.val()) + 1;
    //         $input.val(value);
    //         $input.change();
    //         updatePriceSlider($this, value);
    //     });
    // });

    // var priceInputMax = document.getElementById("price-max"),
    //     priceInputMin = document.getElementById("price-min");

    // priceInputMax.addEventListener("change", function () {
    //     updatePriceSlider($(this).parent(), this.value);
    // });

    // priceInputMin.addEventListener("change", function () {
    //     updatePriceSlider($(this).parent(), this.value);
    // });

    // // Price Slider
    // var priceSlider = document.getElementById("price-slider");
    // if (priceSlider) {
    //     noUiSlider.create(priceSlider, {
    //         start: [1, 10000],
    //         connect: true,
    //         step: 1,
    //         range: {
    //             min: 1,
    //             max: 10000,
    //         },
    //     });

    //     priceSlider.noUiSlider.on("update", function (values, handle) {
    //         var value = values[handle];
    //         handle
    //             ? (priceInputMax.value = value)
    //             : (priceInputMin.value = value);
    //     });
    // }

    // function updatePriceSlider(elem, value) {
    //     if (elem.hasClass("price-min")) {
    //         console.log("min");
    //         priceSlider.noUiSlider.set([value, null]);
    //     } else if (elem.hasClass("price-max")) {
    //         console.log("max");
    //         priceSlider.noUiSlider.set([null, value]);
    //     }
    // }
})(jQuery);

const btnFilter = document.querySelectorAll(".shoes .item-content");
//console.log(btnFilter);

for (let i = 0; i < btnFilter.length; i++) {
    const element = btnFilter[i];
    //element là 1 item-content
    //từ item-content cần lấy ra các thẻ a kiểm tra nếu đúng index i thì remove lại show-filter
    //ngược lại add .show-filter
    const tagA = btnFilter[i].querySelector(".filters");
    tagA.onclick = function (e) {
        //console.log(e);
        // handleCollapse(element);
        element.classList.toggle("show-filter");
    };
}

function handleCollapse(tag) {
    for (let i = 0; i < btnFilter.length; i++) {
        if (tag != btnFilter[i]) {
            btnFilter[i].classList.remove("show-filter");
        }
    }
    tag.classList.toggle("show-filter");
}

// Handle show & hide filter
const filterBar = document.getElementsByClassName("filter-shoe");
const btnToggle = document.getElementById("btnToggle");
const row = document.querySelector(".row-show");

btnToggle.onclick = function (e) {
    //  console.log(e);
    row.classList.toggle("show-hide");
    if (this.dataset.bit == 1) {
        console.log(this.dataset.bit + "đây là dataset");
        this.innerHTML = "Bật Filter";
        this.dataset.bit = 2;
    } else if (this.dataset.bit == 2) {
        this.innerHTML = "Ẩn Filter";
        this.dataset.bit = 1;
    }
};
