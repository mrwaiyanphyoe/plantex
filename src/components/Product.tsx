import { products } from "../assets/data";

const Product = () => {
	return (
		<section className="product section container" id="products">
			<h2 className="section__title-center">
				Check out our <br /> products
			</h2>

			<p className="product__description">
				Here are some selected plants from our showroom, all are in
				excellent shape and has a long life span. Buy and enjoy best
				quality.
			</p>

			<div className="product__container grid">
				{products.map((product, index) => (
					<article className="product__card" key={index}>
						<div className="product__circle"></div>

						<img
							src={product.image}
							alt={`${product.title}'s image`}
							className="product__img"
						/>

						<h3 className="product__title">{product.title}</h3>
						<span className="product__price">{product.price}</span>

						<button className="button--flex product__button">
							<i className="ri-shopping-bag-line"></i>
						</button>
					</article>
				))}
			</div>
		</section>
	);
};

export default Product;
