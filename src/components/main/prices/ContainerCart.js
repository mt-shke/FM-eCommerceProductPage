import css from "./ContainerCart.module.css";
import { useState } from "react";
import { useStore } from "../../../store/store";

const ContainerCart = (props) => {
	const [quantity, setQuantity] = useState(0);
	const stock = props.product.quantityInStock;

	const dispatch = useStore()[1];

	const quantityHandler = (event) => {
		const value = event.target.value;
		setQuantity(value > stock ? stock : value < 0 ? 0 : value);
	};

	const cartHandler = (event) => {
		const minus = event.target.closest("div")?.classList.contains("minus");
		const plus = event.target.closest("div")?.classList.contains("plus");
		const add = event.target.closest("button")?.classList.contains("btn-add");

		if (minus) {
			setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
		}
		if (plus) {
			setQuantity((prev) => (prev < stock ? prev + 1 : stock));
		}
		if (add) {
			if (stock <= 0) return;
			if (stock > 0 && +quantity <= stock) {
				dispatch("ADD_PRODUCT_TO_CART", {
					...props.product,
					quantity: +quantity,
				});

				dispatch("REMOVE_PRODUCT_FROM_STOCK", {
					...props.product,
					quantity: +quantity,
				});
			}
		}
	};

	return (
		<div className={`${css["container__cart"]} container`}>
			<div className="container__quantity">
				<div className="minus bg-center-cover-nr btn-minus" onClick={(e) => cartHandler(e)}>
					<img src="../../assets/images/icon-minus.svg" alt="icon minus" />
				</div>
				<input
					type="number"
					min="0"
					className="quantity fwb text-vblue"
					value={quantity}
					onChange={quantityHandler}
					onBlur={quantityHandler}
				></input>
				<div className="plus bg-center-cover-nr btn-plus" onClick={(e) => cartHandler(e)}>
					<img src="../../assets/images/icon-plus.svg" alt="icon plus" />
				</div>
			</div>
			<button className="btn-add" onClick={(e) => cartHandler(e)}>
				<img src="../../assets/images/icon-cart.svg" alt="cart icon" /> Add to cart
			</button>
		</div>
	);
};

export default ContainerCart;
