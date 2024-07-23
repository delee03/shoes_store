import { renderRelatedShoe } from "./export.js";

// Hàm để lấy giá trị của một tham số từ URL
function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, "\\$&");
    let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Lấy ID của giày từ URL
const idImport = getParameterByName("id");

//code lại lấy chi tiết giày
function getDetailShoe(id) {
    let promise = axios({
        url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
        method: "GET",
        //quan trọng : headers truyền token;  data truyền body; query thì param
    });

    promise
        .then((res) => {
            // console.log(res);
            console.log("API response:", res.data.content);
            renderDetailShoe(res.data.content);
        })
        .catch((err) => {
            console.log(err);
        });
}

getDetailShoe(idImport);

function attachTabEventListeners() {
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
}

function renderDetailShoe(giay, idRender = "detail-shoes") {
    console.log("Rendering shoe details:", giay);
    let {
        image,
        name,
        price,
        description,
        shortDescription,
        quantity,
        size,
        relatedProducts,
    } = giay;
    let content = `
             <div class="col-md-7">
                        <div class="item_left">
                            <div class="image_left">
                                <img  src=${image} alt="">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="item_right">
                            <div class="title1">
                                <h2>${name}</h2>
                                <h4 class="fs-5">Category's Shoes</h4>
                                <p class="fs-3">${price}. 000₫</p>
                            </div>
                            <div class="title3">
                                <h4 class="mb-3 fs-5">Select Size</h4>
                                <div class="row">
                                    ${renderSize(size)}
                                  </div>
                                  <div class="row">
                                    <div class="col"><button class="btn-size">EU 37</button></div>
                                    <div class="col"><button class="btn-size">EU 37.5</button></div>
                                    <div class="col"><button class="btn-size">EU 38</button></div>
                                    <div class="col"><button class="btn-size">EU 39.5</button></div>
                                  </div>
                                  
                            </div>
                            <div class="title4">
                                <div class="btn_item1 py-2">
                                    <button>Add to bag</button>
                                </div>
                                <div class="btn_item2">
                                    <button>Favourite</button>
                                </div>
                                <p>This product is excluded from site <br> promotions and discounts.</p>
                            </div>
                            <div class="title5">
                                <p>Short Des: ${shortDescription}</p>
                                <ul>
                                    <li>Colour Shown: Coconut Milk/White/Guava Ice</li>
                                    <li>Style: DZ2794-104</li>
                                     <li>Quantity: ${quantity}</li>
                                </ul>
                                <button>View Product Details</button>
                            </div>
                            <div class="title6">
                                <div class="tab-container">
                                    <div class="tab">
                                        <div class="tab-header">Free Delivery and Returns <span class="arrow">▼</span></div>
                                        <div class="tab-content">
                                            <p>Your order of 5.000.000₫ or more gets free standard delivery.</p>
                                            <ul>
                                                <li>Standard delivered 4-5 Business Days</li>
                                                <li>Express delivered 2-4 Business Days</li>
                                            </ul>
                                            <p>Orders are processed and delivered Monday-Friday (excluding public holidays)</p>
                                        </div>
                                    </div>
                                    <div class="tab">
                                        <div class="tab-header">Reviews (58) <span class="arrow">▼</span></div>
                                        <div class="tab-content">
                                            <p>★★★★☆</p>
                                            <p>Customer reviews...</p>
                                        </div>
                                    </div>
                                    <div class="tab">
                                        <div class="tab-header">Description <span class="arrow">▼</span></div>
                                        <div class="tab-content">
                                            <p>${description}</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>    
        `;

    document.getElementById(idRender).innerHTML = content;
    attachTabEventListeners(); // Gán sự kiện sau khi nội dung được render
    renderRelatedShoe(relatedProducts, "related-shoe");
}

function renderSize(arrSizes) {
    let content1 = "";
    for (let item of arrSizes) {
        content1 += ` <div class="col"><button class="btn-size">EU ${item}</button></div>`;
    }
    return content1;
}
