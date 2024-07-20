function getAllShoes() {
    let promise = axios({
        url: "https://shop.cyberlearn.vn/api/Product",
        method: "GET",
    });

    promise.then((res) => {
        console.log(res);
        renderShoesList(res.data.content);
    });
}

getAllShoes();

function renderShoesList(arrShoes, idRender = "list-shoes") {
    let content = "";
    for (let shoe of arrShoes) {
        let { name, price, image, shortDescription, id, categories } = shoe;
        content += `    
              <div class="col-lg-4 col-md-6 col-sm-12 col-12">                            
                    <div class="shoe-item">
                    <div class="shoe-img">
                        <a href="#!" class="d-block"> <img src="${image}" alt=""> </a>                        
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
                
            </div> 
        `;
    }
    document.getElementById(idRender).innerHTML = content;
}
