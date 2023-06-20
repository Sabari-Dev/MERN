import { websiteName, websiteDescription, products } from "./data";

let Products = () => {
  return (
    <div className="products">
      <h1>
        <i class="bi bi-cart3"></i>
        {websiteName}
      </h1>
      <p className="des">{websiteDescription} </p>
      <div className="row">
        {products.map((product, index) => (
          <div className="product col-3 " key={index + 1}>
            <img src={product.image} alt={product.title} />
            <div className="content">
              <p className="title">{product.title}</p>
              <p className="price">€.{product.price}</p>
              {/* <p>
                <span>category:</span>
                {product.category}
              </p>
              <p>
                <span>description:</span>
                {product.description}
              </p>
              <p>
                <span>Rating :</span> rate:{product.rating.rate},count:
                {product.rating.count}
              </p> */}
              <button className="btn btn-primary cart">
                Add to cart <i class="bi bi-cart3"></i>
              </button>
              <button className="btn btn-danger favorite">
                Add Favorite <i class="bi bi-heart-fill"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Products;
