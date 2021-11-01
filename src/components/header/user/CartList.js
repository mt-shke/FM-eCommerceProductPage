import { Fragment } from "react";
import css from "./CartList.module.css";
import List from "./List";

const CartList = (props) => {
	const close = !!props.cart;
	const empty = props.data.length === 0;

	return (
		<div className={`${css["container__cart"]} ${close ? css.close : css.open} `}>
			<h3 className="fwb text-vblue">Cart</h3>
			<hr />
			{!empty && (
				<Fragment>
					<List data={props.data} />
					<button className={`${css.button}`}>Checkout</button>
				</Fragment>
			)}
			{empty && <p className="fwb text-dblue">Your cart is empty.</p>}
		</div>
	);
};

export default CartList;
