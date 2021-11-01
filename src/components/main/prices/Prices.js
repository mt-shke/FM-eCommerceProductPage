import { Fragment } from "react/cjs/react.production.min";
import ContainerCart from "./ContainerCart";
import css from "./Prices.module.css";

const Prices = (props) => {
	const { price, promo, originPrice, quantityInStock } = props.product;

	return (
		<Fragment>
			<div className={`${css["container__price"]} container`}>
				<h3 className="product-price fwb fs-700 text-vdblue">
					${price} <span className="product-promo fwb text-orange">{promo}%</span>
				</h3>

				<span className="product-origin-price linethrough text-blue fwb">${originPrice}</span>
				<span className="product-quantity-in-stock fwb text-vblue fs-400">In stock:{quantityInStock}</span>
			</div>
			<ContainerCart product={props.product} />
		</Fragment>
	);
};

export default Prices;
