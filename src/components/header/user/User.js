import { useState } from "react";
import { useStore } from "../../../store/store";
import CartList from "./CartList";
import css from "./User.module.css";

const User = () => {
	const [cart, showCart] = useState(true);
	const state = useStore()[0];

	const cartHandler = (event) => {
		if (cart && event.target.classList.contains("overlay-cart")) {
			showCart((o) => !o);
			return;
		}
		showCart((o) => !o);
	};

	const items = state.cart.items;
	const quantity = items.map((item) => item.quantity);
	const totalQuantity = quantity ?? quantity.reduce((a, b) => a + b);

	return (
		<div className={css.user}>
			{!cart && <div className={`${css.overlay} overlay-cart`} onClick={(e) => cartHandler(e)}></div>}
			<div className={`${css["cart-icon"]} cart-icon`} onClick={cartHandler}>
				{totalQuantity && <span>{totalQuantity}</span>}
				<img src={"/assets/images/icon-cart.svg"} alt="icon cart" />
			</div>
			<div className={css.avatar}>
				<img src={"/assets/images/image-avatar.png"} alt="avatar" />
			</div>
			<CartList data={items} cart={cart} />
		</div>
	);
};

export default User;
