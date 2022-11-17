import Product1 from "../assets/image/product1.png";
import Product2 from "../assets/image/product2.png";
import Product3 from "../assets/image/product3.png";
import Product4 from "../assets/image/product4.png";
import Product5 from "../assets/image/product5.png";
import Product6 from "../assets/image/product6.png";

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
				<article className="product__card">
					<div className="product__circle"></div>

					<img src={Product1} alt="" className="product__img" />

					<h3 className="product__title">Cacti Plant</h3>
					<span className="product__price">$19.99</span>

					<button className="button--flex product__button">
						<i className="ri-shopping-bag-line"></i>
					</button>
				</article>

				<article className="product__card">
					<div className="product__circle"></div>

					<img src={Product2} alt="" className="product__img" />

					<h3 className="product__title">Cactus Plant</h3>
					<span className="product__price">$11.99</span>

					<button className="button--flex product__button">
						<i className="ri-shopping-bag-line"></i>
					</button>
				</article>

				<article className="product__card">
					<div className="product__circle"></div>

					<img src={Product3} alt="" className="product__img" />

					<h3 className="product__title">Aloe Vera Plant</h3>
					<span className="product__price">$7.99</span>

					<button className="button--flex product__button">
						<i className="ri-shopping-bag-line"></i>
					</button>
				</article>

				<article className="product__card">
					<div className="product__circle"></div>

					<img src={Product4} alt="" className="product__img" />

					<h3 className="product__title">Succulent Plant</h3>
					<span className="product__price">$5.99</span>

					<button className="button--flex product__button">
						<i className="ri-shopping-bag-line"></i>
					</button>
				</article>

				<article className="product__card">
					<div className="product__circle"></div>

					<img src={Product5} alt="" className="product__img" />

					<h3 className="product__title">Succulent Plant</h3>
					<span className="product__price">$10.99</span>

					<button className="button--flex product__button">
						<i className="ri-shopping-bag-line"></i>
					</button>
				</article>

				<article className="product__card">
					<div className="product__circle"></div>

					<img src={Product6} alt="" className="product__img" />

					<h3 className="product__title">Green Plant</h3>
					<span className="product__price">$8.99</span>

					<button className="button--flex product__button">
						<i className="ri-shopping-bag-line"></i>
					</button>
				</article>
			</div>
		</section>
	);
};

export default Product;
