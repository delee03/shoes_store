//ck hướng USER

export function chuyenHuongUser(ID) {
    window.location.href = `http://127.0.0.1:5501/detail.html?id=${ID}`;
}

//render related shoes
export function renderRelatedShoe(arrShoes, idRender) {
    let content = "";
    for (let item of arrShoes) {
        let { image, name, price } = item;
        content += `   
            <div class="product d-inline-block" style="width: 33%;">
                <div class="product-img">
                    <img src=${image} class="img-fluid" alt="">
                    <div class="product-label">
                        <span class="new">NEW</span>
                    </div>
    
                    <div class="product-body">
                
                        <h3 class="product-name"><a href="#">${name}</a></h3>
                        <h5 class="product-price">$${price} <del class="product-old-price">$990.00</del></h5>                                          
                        
                    </div>
                </div>                                                                                     
            </div>        
       
    `;
    }
    document.getElementById(idRender).innerHTML = content;
}

export default function renderShoeList(arrShoes, idRender) {
    let content = "";
    for (let item of arrShoes) {
        let { image, name, price, id } = item;
        content += ` <div class="col-lg-4 col-md-6 col-sm-12 col-12">                            
                    <div class="shoe-item">
                    <div class="shoe-img">
                        <a href="#!" class="d-block" onclick="chuyenHuongUser(${id})"> <img src="${image}" alt=""> </a>                        
                    </div>
                    <div class="shoe-body">
                        <span class="info">Best Seller</span>
                        <h3 class="product-name"><a href="#">${name}</a></h3>
                        <p class="category">Sneaker</p>
                        <p class="color">${"Colors: " + id}</p>
                        <div class="price">
                            
                            <span class="price-new">${"$ " + price}</span>
                        </div>
                    </div>
                    
                </div>
                
            </div> `;
    }
    document.getElementById(idRender).innerHTML = content;
}
