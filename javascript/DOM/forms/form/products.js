let newProducts = [];
let productsDiv = document.querySelector("#products");
async function fetchData(url) {
  try {
    let res = await fetch(url);
    console.log(res);
    let products = await res.json();
    console.log(products);
    newProducts = [...products];

    let productsArr = products.map((product) => {
      return `
                <div id=product-${product.id} class="col-11 border border-2 m-1">
                  <div class="row">
                    <div class="col-3">
                   <img src=${product.image} alt=product-${product.id} height="200px" width="200px" class="m-2" />
                   </div>
                   <div class="col-9">
                    <p><strong>Title: </strong>${product.title}</p>
                    <p><strong>Category: </strong>${product.category}</p>
                    <p><strong>Description: </strong>${product.description}</p>
                    <p><strong>Price: </strong>${product.price}</p>
                    <p><strong>Rating: </strong><i class="fa-solid fa-star"></i> ${product.rating.rate}</p>
                    <p><strong>Count: </strong>${product.rating.count}</p>
                    </div>
                    </div>
                </div>
                `;
    });
    //   console.log(productsArr.join(" "));
    productsDiv.innerHTML = productsArr.join(" ");
  } catch (error) {
    console.log(error);
  }
}

let btn = document.querySelector("#btn");
let searchStr = document.querySelector("#search");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  let filteredProducts = newProducts.filter((product) =>
    product.title.includes(searchStr.value)
  );
  let productsArr = filteredProducts.map((product) => {
    return `
                <div id=product-${product.id}>
                    <p><strong>Title: </strong>${product.title}</p>
                    <p><strong>Description: </strong>${product.description}</p>
                    <p><strong>Category: </strong>${product.category}</p>
                    <img src=${product.image} alt=product-${product.id} height="100px" width="100px"/>
                    <p><strong>Price: </strong>${product.price}</p>
                    <p><strong>Rating: </strong>${product.rating.rate}</p>
                    <p><strong>Count: </strong>${product.rating.count}</p>
                    <hr />
                </div>
                `;
  });
  productsDiv.innerHTML = productsArr;
});

fetchData("https://fakestoreapi.com/products");
